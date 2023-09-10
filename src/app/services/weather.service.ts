import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor() {}

  getWeatherDescription(weatherCode: number): { description: string, icon: string } {
    switch (weatherCode) {
      case 0:
        return { description: "No precipitation", icon: "assets/sun.svg" };
      case 1:
        return { description: "Fog or haze", icon: "assets/fog.svg" };
      case 2:
        return { description: "Rain", icon: "assets/rain.svg" };
      case 3:
        return { description: "Snow", icon: "assets/snow.svg" };
      case 4:
        return { description: "Hail", icon: "assets/hail.svg" };
      case 5:
        return { description: "Heavy rain", icon: "assets/heavyrain.svg" };
      case 6:
        return { description: "Heavy snowfall", icon: "assets/heavysnowfall.svg" };
      case 7:
        return { description: "Heavy hail", icon: "assets/hail.svg" };
      case 8:
        return { description: "Storm", icon: "assets/storm.svg" };
      default:
        return { description: "unknown", icon: "assets/unknown.svg" };
    }
  }

}
