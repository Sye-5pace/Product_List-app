import { Component,OnInit,AfterViewInit } from '@angular/core';
import { map, Observable, take } from 'rxjs';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import anime from 'animejs/lib/anime.es.js';
import { ModalService } from './../../services/modal.service';
import { ProductsFacadeService } from '../../services/products-facade.service';
import { CartItem } from '../../store/model/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-cart',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.css'
})

export class ProductCartComponent implements OnInit , AfterViewInit {
  cartLength: number = 0;
  cartTotal: number = 0;
  carts$: Observable<CartItem[]> = this.productsFacade.carts$;
  confirmModal: boolean = false;
  carts: CartItem[] = [];

  constructor(private productsFacade: ProductsFacadeService
    , private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.productsFacade.carts$.subscribe((cartItems) => {
      this.cartLength = cartItems.reduce((total, item) =>
        total + item.quantity, 0
      )
      this.cartTotal = cartItems.reduce((total,item) =>
        total + (item.price * item. quantity),0
      )
      this.carts = cartItems;
    })

    this.modalService.modalState$.subscribe(
      state => this.confirmModal = state
    )
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

  openModal(){
    this.modalService.openModal()
  }

  onDrop(event: CdkDragDrop<CartItem[], CartItem[], any>): void {
    this.carts$.pipe(
      take(1),
      map(items => items.findIndex(item => item === event.item.data))
    ).subscribe(previousIndex => {
      const newIndex = event.currentIndex;
      if (previousIndex !== -1 && previousIndex !== newIndex) {
        moveItemInArray(this.carts, previousIndex, newIndex);
        this.productsFacade.updateCartItemOrder(previousIndex, newIndex);
      }
    });
  }
}
