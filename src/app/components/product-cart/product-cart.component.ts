import { Component } from '@angular/core';
import { ProductsFacadeService } from '../../services/products-facade.service';
import { CartItem } from '../../store/model/product';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.css'
})

export class ProductCartComponent {
  cartLength: number = 0;
  carts$: Observable<CartItem[]> = this.productsFacade.carts$;

  constructor(private productsFacade: ProductsFacadeService) {}

  ngOnInit(): void {
    this.productsFacade.carts$.subscribe((cart) => {
      this.cartLength = cart.length;

    });
  }
}
