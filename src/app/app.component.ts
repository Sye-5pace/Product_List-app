import { Component } from '@angular/core';
import { ProductPageComponent } from './view/product-page/product-page.component';
import anime from 'animejs/lib/anime.es.js';
import { ConfirmModalComponent } from "./components/confirm-modal/confirm-modal.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductPageComponent, ConfirmModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Product-List-app';



}
