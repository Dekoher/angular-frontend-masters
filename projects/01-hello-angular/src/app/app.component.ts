import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ol>
      <li>Iron Man</li>
      <li>Avengers</li>
      <li>Harry Potter</li>
    </ol>
  `,
  styles: `ol {list-style-type: upper-roman}`,
})
export class AppComponent {}
