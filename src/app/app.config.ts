import { ApplicationConfig } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { localStorageSync } from 'ngrx-store-localstorage';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { productsReducer } from './store/products.reducer';
import { ProductsEffects } from './store/products.effects';


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
    provideHttpClient(),
    DragDropModule 
  ]
};
