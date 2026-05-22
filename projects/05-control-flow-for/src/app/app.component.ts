import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <section class="container">
       @for (car of carList; track $index) {
         <article class="listing">
           <div class="image-parent">
             <img class="product-image" [src]="car.photo" />
             <!-- <img class="product-image" src="https://placehold.co/100x100" /> -->
           </div>
           <section class="details">
             <p class="title">{{car.make}} {{car.model}}</p>
             <hr />
             <p class="detail">
               <span>Year</span>
               <span>{{car.year}}</span>
             </p>
             <div class="detail">
               <span>Transmission</span>
               <span>{{car.transmission}}</span>
             </div>
             <p class="detail">
               <span>Mileage</span>
               <span>{{car.miles}}</span>
             </p>
             <p class="detail">
               <span>Price</span>
               <span>{{car.price}}</span>
             </p>
           </section>
         </article>
       } @empty {
         <p>Ther are not cars in the list</p>
       }
    </section>
  `,
  styleUrl: 'app.component.css',
})
export class AppComponent {
  carList: any[] = [
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
      photo: './assets/red-car.jpeg'
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
      photo: './assets/red-car.jpeg'
    },
  ];
}
