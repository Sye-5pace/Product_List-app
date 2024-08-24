import { Component } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { ProductsFacadeService } from '../../services/products-facade.service';
import { Observable } from 'rxjs';
import { CartItem } from '../../store/model/product';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-confirm-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirm-modal.component.html',
  styleUrl: './confirm-modal.component.css'
})
export class ConfirmModalComponent {
  confirmModal: boolean = false;
  cartTotal!: number;
  carts$: Observable<CartItem[]> = this.productsFacade.carts$;

  constructor(private modalService: ModalService,
    private productsFacade: ProductsFacadeService
  ){}

  ngOnInit(){
    this.modalService.modalState$.subscribe(state =>
      this.confirmModal = state
    )
    this.productsFacade.carts$.subscribe((cartItems) => {
      this.cartTotal = cartItems.reduce((total,item) =>
        total + (item.price * item. quantity),0
      )
    })
  }

  startNewOrder(){
    this.modalService.closeModal()
  }

}
