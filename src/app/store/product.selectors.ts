import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState } from './model/product';

export const selectProductState = createFeatureSelector<ProductsState>('product')

export const selectProducts = createSelector(
  selectProductState,
  (state: ProductsState) => state.products
);

export const selectProductError = createSelector(
  selectProductState,
  (state: ProductsState) => state.error
)
