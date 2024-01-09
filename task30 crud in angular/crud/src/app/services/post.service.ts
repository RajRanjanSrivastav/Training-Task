import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Post } from '../interface/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  // private apiURL = `https://jsonplaceholder.typicode.com`;
  private apiURL = `http://localhost:3000`;
  type = '/posts/';
  post:[] | undefined;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(this.apiURL+this.type).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }

  // find function
  find(id:number):Observable<any>{
    return this.http.get(this.apiURL+this.type+id).pipe(catchError((error:HttpErrorResponse)=>{
      return throwError(error);
    }))
  }

  // delete function
  deleteFun(id:number):Observable<any>{
    return this.http.delete(this.apiURL+this.type+id).pipe(catchError((error:HttpErrorResponse)=>{
      return throwError(error);
    }))
  }

  // for create post
  create(post:Post){
    return this.http.post(this.apiURL+this.type,JSON.stringify(post)).pipe(catchError((error:HttpErrorResponse)=>{
      return throwError(error);
    }))
  }

  errorHandler(
    errorHandler: any
  ): import('rxjs').OperatorFunction<Object, any> {
    throw new Error('Method not implemented.');
  }
}
