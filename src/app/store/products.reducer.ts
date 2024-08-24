import { createReducer, on } from '@ngrx/store';
import { loadProduct, loadProductFailure, loadProductSuccess, addToCart, removeFromCart, deleteCartItem, startNewOrder } from './products.actions';
import { CartItem, IProduct, ProductsState } from './model/product';

export const initialState: ProductsState = {
  products: [],
  error: null,
  cart: []
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
  on(addToCart, (state, { index, quantity }) => {
    const existingCartItemIndex = state.cart.findIndex((item) => item.name === state.products[index].name);
    let updatedCart;
    if (existingCartItemIndex !== -1) {
        updatedCart = state.cart.map((item, idx) =>
        idx === existingCartItemIndex ?
         { ...item, quantity: item.quantity + quantity}
          : item
      );
    } else {
      const product = state.products[index];
      const newCartItem: CartItem = {
        name: product.name,
        price: product.price,
        thumbnail: product.image['thumbnail'],
        quantity: quantity,
      };
      updatedCart = [...state.cart, newCartItem];
    }
    return {
      ...state,
      cart: updatedCart,
    };
  }),
  on(removeFromCart,(state,{index , quantity}) => {
    const existingCartItemIndex = state.cart.findIndex((item) => item.name === state.products[index].name);
    let updatedCart;
    if(existingCartItemIndex !== index) {
      const item = state.cart[existingCartItemIndex];
      if(item.quantity <= quantity) {
        updatedCart = state.cart.filter((_,idx) => idx !== existingCartItemIndex);
      }else {
        updatedCart = state.cart.map((item,idx) =>
          idx === existingCartItemIndex?
           {...item, quantity: item.quantity - quantity}
            : item
        )
      }
    }else {
      updatedCart = state.cart
    }
    return {
     ...state,
      cart: updatedCart,
    };
  }),
  on(deleteCartItem,(state,{index}) => {
    return {
      ...state,
      cart: state.cart.filter((_,idx) => idx!== index)
    }
  }),
  on(startNewOrder, (state) => {
    return {
      ...state,
      cart: []
    };
  })
);


