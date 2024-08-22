import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { productsReducer } from './store/products.reducer';
import { ProductsEffects } from './store/products.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({ products: productsReducer}),
    provideEffects([ProductsEffects]),
    provideHttpClient()
  ]
};
