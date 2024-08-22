import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadProduct,addToCart } from '../store/products.actions';
import { selectProducts, selectProductError, selectCart } from '../store/product.selectors';
import { CartItem, IProduct } from '../store/model/product';

@Injectable({
  providedIn: 'root'
})

export class ProductsFacadeService {
  products$: Observable<IProduct[]> = this.store.select(selectProducts);
  error$: Observable<any> = this.store.select(selectProductError);
  carts$: Observable<CartItem[]> = this.store.select(selectCart);

  constructor(private store: Store) { }

  loadProducts(): void{
    this.store.dispatch(loadProduct());
  }

  addToCart(cart:CartItem):void{
    this.store.dispatch(addToCart({cart}));
    console.log(cart);
  }
}


