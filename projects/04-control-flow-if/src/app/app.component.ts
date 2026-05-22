import { Component } from '@angular/core';
import { AccountInfo } from './account-info';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <article class="card">
      <h1 class="card-title">Frontend Masters Express</h1>
      <p class="card-number">0000 0000 0000 0000</p>
      <section class="membership-info">
        <p>
          {{ account.name }}
        </p>
        <p>Valid Thru: {{ account.validThru }}</p>
        <p>CVV: {{ account.CVV }}</p>
        <p>
          @if (account.testingControlFlows === 'elseIf') {
            @if (account.membershipStatus === 'gold') {
              <span class="badge gold">Gold</span>
            } @else if (account.membershipStatus === 'platinum') {
              <span class="badge platinum">Platinum</span>
            } @else {
              <span class="badge silver">Silver</span>
            }
          } @else {
            @switch (account.membershipStatus) {
              @case ('gold') {
                <span class="badge gold">Gold switch</span>
              }
              @case ('platinum') {
                <span class="badge platinum">Platinum switch</span>
              }
              @default {
                <span class="badge silver">Silver switch</span>
              }
            }
          }
        </p>
      </section>
    </article>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  account: AccountInfo = {
    name: 'Melisa Evan',
    membershipStatus: 'silver',
    validThru: '12/2022',
    CVV: '123',
    testingControlFlows: 'switch'
  };
}
