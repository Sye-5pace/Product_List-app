import { Component } from '@angular/core';
import { ProductListComponent } from './../../components/product-list/product-list.component';
import { ProductCartComponent } from "../../components/product-cart/product-cart.component";

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [ProductListComponent, ProductCartComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})

export class ProductPageComponent {

}
