import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Car } from '../car';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="display: flex; width: 100%; gap: 1rem; flex-wrap: wrap; justify-content: center">
      @for (car of carInfo; track car) {
        <article class="listing">
          <div class="image-parent">
            <img class="product-image" src="https://placehold.co/100x100" />
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
        <p>No elements to show</p>
      }
    </div>
  `,
  styles: ``,
})
export class ListingComponent implements OnInit {
  @Input () carInfo: Car[] = [];
  ngOnInit() {
    console.log('list=>', this.carInfo);
  }
}
