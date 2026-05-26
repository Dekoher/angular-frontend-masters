import { Component, inject, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './data';
import { UserInfoComponent } from "./user-info/user-info.component";

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>User Listing</h1>
    @for (user of userData; track $index) {
      <app-user-info [user]="user" />
    }
  `,
  imports: [UserInfoComponent],
})
export class AppComponent implements OnInit {
  userService = inject(UserService);
  userData: User[] = [];
  // constructor() {
  // }
  ngOnInit() {
    this.userService.getUserData().then((data) => {
      this.userData = data;
      console.log('userData=>', data);
    });
  }
}
