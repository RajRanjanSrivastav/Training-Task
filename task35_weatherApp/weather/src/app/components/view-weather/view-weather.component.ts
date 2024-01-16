import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WeatherApiService } from '../../services/weather-api.service';
import { Weather } from '../../models/weather';

@Component({
  selector: 'app-view-weather',
  standalone: true,
  imports: [],
  templateUrl: './view-weather.component.html',
  styleUrl: './view-weather.component.css',
})
export class ViewWeatherComponent {
  data:Weather={
    name: '',
    humidity: '',
    pressure: '',
    temp: '',
    weather: [''],
    wind: {
      deg: '',
      speed: ''
    },
    main: {
      temp: '',
      humidity: '',
      pressure: ''
    }
  };

  constructor(private serv: WeatherApiService) {
    this.solve()
  }

  collectData(city:any) {
    this.serv.fetchData(city).subscribe((e) => {
      this.data=e;
    });
  }

  search(id: any) {
    if(id!= '')
    {
      this.collectData(id); 
    }
    else{
      alert("Please enter the city name")
    }
    
 
  }

  // sovel the problem
  solve() {
    let arr = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    let temparr = arr;
    // console.log(temparr, 'before');

    let len = arr[0].length;

    for (let i = 0; i < len; i++) {
      for (let j = i; j < len; j++) {
        let temp = arr[i][j];
        arr[i][j] = arr[j][i];
        arr[j][i] = temp;
      }
    }
    console.log(arr);
  }
}
