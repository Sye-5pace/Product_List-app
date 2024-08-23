import { Component } from '@angular/core';
import { ProductPageComponent } from './view/product-page/product-page.component';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Product-List-app';

  

}
