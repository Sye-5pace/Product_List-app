import { ProductlistFetchService } from './../services/productlist-fetch.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect,ofType } from '@ngrx/effects';
import { catchError,map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs'
import { loadProduct, loadProductSuccess, loadProductFailure } from './products.actions';


@Injectable()
export class ProductsEffects {
  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType(loadProduct),
    switchMap(() => this.productFetch.fetchProductList().pipe(
      map(products => loadProductSuccess({ products })),
      catchError(error => of(loadProductFailure({ error: error.message })))
    ))
  ));

  constructor(private actions$: Actions,
  private productFetch: ProductlistFetchService) {}
}
