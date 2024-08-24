// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore, StoreConfig } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { productsReducer } from './store/products.reducer';
import { ProductsEffects } from './store/products.effects';
import { localStorageSync } from 'ngrx-store-localstorage';


const localStorageSyncReducer = (reducer: any): any =>
  localStorageSync({
    keys: ['products'],
    rehydrate: true
  })
(reducer);

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore({ products: productsReducer }, { metaReducers: [localStorageSyncReducer] }),
    provideEffects([ProductsEffects]),
    provideHttpClient()
  ]
};
