import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input() userData: any;
  @Input() weatherData: any;
  weathers: any[] = [];
  users: any[] = [];

  constructor(
    private userService: UserService,
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.updateUserList();
  }

  updateUserList() {
    this.users = this.userService.getUsers();
  }

  deleteUser(user: any) {
    this.userService.deleteUser(user);
    this.updateUserList();
  }



  getWeatherDescription(weatherCode: number): { description: string, icon: string } {
    return this.weatherService.getWeatherDescription(weatherCode);
  }
}
