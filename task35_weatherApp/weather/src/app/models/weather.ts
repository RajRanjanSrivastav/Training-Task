export interface Weather {
  weather: [
    any
  ];
  name: String;
  wind: {
    deg: String;
    speed: String;
  };
  main: {
    temp: String;
    humidity: String;
    pressure: String;
  };
  humidity: any;
  pressure: any;
  temp: any;
}
