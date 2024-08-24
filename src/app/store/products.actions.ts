import { createAction, props } from '@ngrx/store';
import { IProduct } from './model/product';

export const loadProduct = createAction('[Product List]  Load Product List');
export const loadProductSuccess = createAction('[Product List] Load Products Success', props<{ products: IProduct[]}>())
export const loadProductFailure = createAction('[Product List] Load Products Failure',props<{ error: Error }>())

export const addToCart = createAction('[Add to Cart] Add to Cart', props<{ index: number; quantity: number }>());
export const removeFromCart = createAction('[Remove from Cart] Remove from Cart', props<{index: number; quantity:number}>());
export const deleteCartItem = createAction('[Cart] Delete Cart Item',props<{ index: number }>());
