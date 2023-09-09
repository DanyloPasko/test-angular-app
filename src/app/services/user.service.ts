// user.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  setUsers(users: any[]) {
    throw new Error('Method not implemented.');
  }
  private savedUsers: any[] = []; // Массив для хранения сохраненных пользователей

  constructor() {
    // При инициализации сервиса, попробуйте загрузить сохраненные пользователи из локального хранилища
    const savedUsersJSON = localStorage.getItem('savedUsers');
    if (savedUsersJSON) {
      this.savedUsers = JSON.parse(savedUsersJSON);
    }
  }

  saveUser(user: any) {
    // Добавьте нового пользователя в массив сохраненных пользователей
    this.savedUsers.push(user);

    // Сохраните обновленный список пользователей в локальном хранилище
    localStorage.setItem('savedUsers', JSON.stringify(this.savedUsers));
  }

  getUsers() {
    // Верните массив сохраненных пользователей
    return this.savedUsers;
  }

  deleteUser(user: any) {
    // Получите текущий список пользователей из локального хранилища
    const users = this.getUsers();

    // Найдите индекс выбранного пользователя в массиве
    const index = users.indexOf(user);

    // Удалите пользователя из массива по индексу
    if (index > -1) {
      users.splice(index, 1);

      // Сохраните обновленный список пользователей в локальном хранилище
      localStorage.setItem('savedUsers', JSON.stringify(users));
    }
  }
}
