import { HttpClient } from '@angular/common/http';
import { Injectable, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  api_key = 'cae3f317db57fc35dfa5076e8a99ff55';
  data: any;
  constructor(private http: HttpClient) {}

  fetchData(city:any):Observable<any> {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.api_key}&units=metric`
    );
  }
}
