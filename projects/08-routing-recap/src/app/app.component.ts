import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    @for (title of productTitles; track title; let id = $index) {
      <a [routerLink]="['details', id]" style="margin-right: 1rem">{{title}}</a>
    }
    <router-outlet>
  `,
})
export class AppComponent {
  title = '08-routing-recap';

  productTitles = ['Product 1', 'Product 2', 'Product 3'];
}
