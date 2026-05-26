import { Injectable } from '@angular/core';
import { data, User } from './data';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly userData: User[] = data;

  constructor() {}

  getUserData(): Promise<User[]> {
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        if (!response.ok) {
          throw new Error('Error en la red');
        }
        return response.json();
      })
      .then(data => {
        console.log('data=>', data);
        return data;
      })
      .catch(error => {
        console.error('Hubo un problema:', error);
      });
    // return new Promise((resolve) => {
    //   resolve(this.userData);
    // });
  }
}
