import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  setUsers(users: any[]) {
    throw new Error('Method not implemented.');
  }
  private savedUsers: any[] = [];

  constructor() {
    const savedUsersJSON = localStorage.getItem('savedUsers');
    if (savedUsersJSON) {
      this.savedUsers = JSON.parse(savedUsersJSON);
    }
  }

  saveUser(user: any, weatherData: any) {
    const userWithWeather = { ...user, temperature: weatherData.current_weather.temperature, weatherCode: weatherData.current_weather.weathercode };
    this.savedUsers.push(userWithWeather);

    localStorage.setItem('savedUsers', JSON.stringify(this.savedUsers));
  }

  getUsers() {
    return this.savedUsers;
  }

  deleteUser(user: any) {
    const users = this.getUsers();

    const index = users.indexOf(user);

    if (index > -1) {
      users.splice(index, 1);

      localStorage.setItem('savedUsers', JSON.stringify(users));
    }
  }
}
