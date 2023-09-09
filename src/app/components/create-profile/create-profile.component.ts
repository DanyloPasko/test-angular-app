// create-profile.component.ts
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
  userData: any; // Для хранения данных пользователя
  weatherData: any; // Для хранения данных о погоде


  constructor(
    private http: HttpClient,
     private userService: UserService,
     private weatherService: WeatherService // Внедрите сервис
     ) {}

  fetchRandomUser() {
    this.http.get('https://randomuser.me/api/').subscribe((data: any) => {
      this.userData = data.results[0];

      const latitude = this.userData.location.coordinates.latitude;
      const longitude = this.userData.location.coordinates.longitude;

      // Запрос к API погоды
      this.http.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m`)
        .subscribe((weatherData: any) => {
          this.weatherData = weatherData;
        });
    });
  }

  getWeatherDescription(weatherCode: number): string {
    return this.weatherService.getWeatherDescription(weatherCode);
  }

  saveProfile() {
    // Вызывайте метод сохранения пользователя только при нажатии кнопки "Save"
    if (this.userData) {
      this.userService.saveUser(this.userData);
    }
  }
}
