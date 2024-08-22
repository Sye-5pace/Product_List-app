import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadProduct } from '../store/products.actions';
import { selectProducts, selectProductError } from '../store/product.selectors';
import { IProduct } from '../store/model/product';

@Injectable({
  providedIn: 'root'
})

export class ProductsFacadeService {
  products$: Observable<IProduct[]> = this.store.select(selectProducts);
  error$: Observable<any> = this.store.select(selectProductError);

  constructor(private store: Store) { }

  loadProducts(): void{
    this.store.dispatch(loadProduct());
  }
}
