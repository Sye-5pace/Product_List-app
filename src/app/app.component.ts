import { Component } from '@angular/core';
import { ProductPageComponent } from './view/product-page/product-page.component';
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
