import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.scss']
})
export class CreateProfileComponent {
  userData: any;
  weatherData: any;


  constructor(
    private http: HttpClient,
     private userService: UserService,
     private weatherService: WeatherService
     ) {}

     fetchRandomUser() {
      this.http.get('https://randomuser.me/api/').subscribe((data: any) => {
        this.userData = data.results[0];

        const latitude = this.userData.location.coordinates.latitude;
        const longitude = this.userData.location.coordinates.longitude;

        this.http.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m`)
          .subscribe((weatherData: any) => {
            this.weatherData = weatherData;

          });
      });
    }

  getWeatherDescription(weatherCode: number): { description: string, icon: string } {
    return this.weatherService.getWeatherDescription(weatherCode);
  }

  saveProfile() {
    if (this.userData) {
      this.userService.saveUser(this.userData, this.weatherData);
    }
  }
}
