// products.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { loadProduct, loadProductFailure, loadProductSuccess, addToCart } from './products.actions';
import { IProduct, ProductsState } from './model/product';

export const initialState: ProductsState = {
  products: [],
  error: null,
  cart: []  // Add this if you want to keep track of the cart items
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
    error: null
  })),
  on(addToCart, (state, { cart }) => ({
    ...state,
    cart: [...state.cart, cart]
  }))
);
