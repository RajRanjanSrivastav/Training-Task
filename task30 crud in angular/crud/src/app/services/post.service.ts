import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiURL = `https://jsonplaceholder.typicode.com`;

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  constructor(private http:HttpClient) { }


  getAll():Observable<any>{
    return this.http.get(this.apiURL+'/comments').pipe(catchError((error:HttpErrorResponse)=>{
      return throwError(error);
    }))

  }
  errorHandler(errorHandler: any): import("rxjs").OperatorFunction<Object, any> {
    throw new Error('Method not implemented.');
  }
}
