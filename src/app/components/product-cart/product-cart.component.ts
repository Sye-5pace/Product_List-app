import { Component,OnInit,AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import anime from 'animejs/lib/anime.es.js';
import { ProductsFacadeService } from '../../services/products-facade.service';
import { CartItem } from '../../store/model/product';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.css'
})

export class ProductCartComponent implements OnInit , AfterViewInit {
  cartLength: number = 0;
  cartTotal: number = 0;
  carts$: Observable<CartItem[]> = this.productsFacade.carts$;

  constructor(private productsFacade: ProductsFacadeService) {}

  ngOnInit(): void {
    this.productsFacade.carts$.subscribe((cartItems) => {
      this.cartLength = cartItems.reduce((total, item) =>
        total + item.quantity, 0
      )
      this.cartTotal = cartItems.reduce((total,item) =>
        total + (item.price * item. quantity),0
      )
    })
  }

  ngAfterViewInit(): void {
    anime({
      targets:'#cart-container ',
      translateX:[250,0],
      easing: 'easeInOutQuad',
      duration: 1200,
      opacity: [0,1],
      delay: 500
    })
  }

  deleteCartItem(index: number){
    this.productsFacade.deleteCartItem(index);
  }
}
