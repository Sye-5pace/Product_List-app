import { createAction, props } from '@ngrx/store';
import { CartItem, IProduct } from './model/product';

export const loadProduct = createAction('[Product List]  Load Product List');
export const loadProductSuccess = createAction('[Product List] Load Products Success', props<{ products: IProduct[]}>())
export const loadProductFailure = createAction('[Product List] Load Products Failure',props<{ error: Error }>())

export const addToCart = createAction('[Add to Cart] Add to Cart', props<{ index: number; quantity: number }>());
