import { createReducer, on } from '@ngrx/store';
import { loadProduct, loadProductFailure, loadProductSuccess } from './products.actions';
import { ProductsState } from './model/product';

export const initialState: ProductsState = {
  products: [],
  error: null
};

export const productsReducer = createReducer(
  initialState,
  on(loadProduct, state => ({
    ...state,
    error: null
  })),
  on(loadProductSuccess, (state, { products }) => ({
    ...state,
    products,
    error: null
  })),
  on(loadProductFailure, (state, { error }) => ({
    ...state,
    error
  }))
);
