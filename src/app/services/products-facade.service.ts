import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadProduct, addToCart, removeFromCart } from '../store/products.actions';
import { selectProducts, selectProductError, selectCart } from '../store/product.selectors';
import { CartItem, IProduct, ProductsState } from '../store/model/product';

@Injectable({
  providedIn: 'root'
})

export class ProductsFacadeService {
  products$: Observable<IProduct[]> = this.store.select(selectProducts);
  error$: Observable<any> = this.store.select(selectProductError);
  carts$: Observable<CartItem[]> = this.store.select(selectCart);

  constructor(private store: Store<ProductsState>) {}

  loadProducts(): void {
    this.store.dispatch(loadProduct());
  }

  addToCart(index: number, quantity: number): void {
    this.store.dispatch(addToCart({ index, quantity }));
  }

  removeFromCart(index: number, quantity: number): void {
    this.store.dispatch(removeFromCart({ index, quantity }));
  }
}
