import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor() {}

  getWeatherDescription(weatherCode: number): string {
    switch (weatherCode) {
      case 0:
        return "No precipitation";
      case 1:
        return "Fog or haze";
      case 2:
        return "Rain";
      case 3:
        return "Snow";
      case 4:
        return "Hail";
      case 5:
        return "Heavy rain";
      case 6:
        return "Heavy snowfall";
      case 7:
        return "Heavy hail";
      case 8:
        return "Storm";
      default:
        return "unknown";
    }
  }
}
