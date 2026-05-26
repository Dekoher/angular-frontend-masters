import { Component } from '@angular/core';
import { PostsComponent } from './posts/posts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PostsComponent],
  template: `
    <section class="container">
      <h1>Deferrable Views Example</h1>
      <button #loadPosts>Load Posts</button>
      @defer (on interaction(loadPosts)) {
        <app-posts />
      } @loading (after 100ms; minimum 1s) {
        <h1>Waiting the posts lists load</h1>
      } @placeholder (minimum 1s) {
        <h1>Placeholder while the posts lists load</h1>
      } @error {
        <h4>Ocurrio un error</h4>
      }
    </section>
  `,
})
export class AppComponent {}
