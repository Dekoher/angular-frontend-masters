import { Component } from '@angular/core';
import { Car } from './car';
import { ListingComponent } from "./listing/listing.component";

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Saved Cars {{ savedCarList.length }}</h1>
    <section class="container">
      <app-listing [carInfo]="carList"></ app-listing>
    </section>
  `,
  styles: [],
  imports: [ListingComponent],
})
export class AppComponent {
  savedCarList: Car[] = [];
  carList: Car[] = [
    {
      make: 'Foyoda',
      model: 'Famery',
      miles: 54354,
      price: 1000,
      year: 2022,
      transmission: 'Automatic',
      photo: './assets/blue-car.jpeg'
    },
    {
      make: 'Ronda',
      model: 'Disaccord',
      miles: 100000,
      price: 230,
      year: 1991,
      transmission: 'Automatic',
      photo: './assets/blue-car.jpeg'
    },
    {
      make: 'Specific Motors',
      model: 'Spoke',
      miles: 100000,
      price: 230,
      year: 1991,
      transmission: 'Automatic',
      photo: './assets/blue-car.jpeg'
    },
    {
      make: 'Fjord',
      model: 'Pocus',
      miles: 1,
      price: 22330,
      year: 2023,
      transmission: 'Automatic',
      photo: './assets/blue-car.jpeg'
    },
  ];
}
