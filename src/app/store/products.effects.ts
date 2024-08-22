import { ProductlistFetchService } from './../services/productlist-fetch.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect,ofType } from '@ngrx/effects';
import { catchError,map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs'


@Injectable()
export class ProductsEffects {
  

  constructor(private actions$: Actions,
  private productFetch: ProductlistFetchService) {}
}
