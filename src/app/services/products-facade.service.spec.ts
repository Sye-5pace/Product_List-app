import { TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ProductsFacadeService } from './products-facade.service';
import { Store } from '@ngrx/store';
import { loadProduct, addToCart, removeFromCart, deleteCartItem, startNewOrder, updateCartOrder } from '../store/products.actions';
import { ProductsState } from '../store/model/product';

describe('ProductsFacadeService', () => {
  let service: ProductsFacadeService;
  let store: MockStore<ProductsState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductsFacadeService,
        provideMockStore({})
      ]
    });

    service = TestBed.inject(ProductsFacadeService);
    store = TestBed.inject(Store) as MockStore<ProductsState>;
    jest.spyOn(store, 'dispatch');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should dispatch loadProduct action when loadProducts is called', () => {
    service.loadProducts();
    expect(store.dispatch).toHaveBeenCalledWith(loadProduct());
  });

  it('should dispatch addToCart action with correct payload when addToCart is called', () => {
    const index = 1;
    const quantity = 2;
    service.addToCart(index, quantity);
    expect(store.dispatch).toHaveBeenCalledWith(addToCart({ index, quantity }));
  });

  it('should dispatch removeFromCart action with correct payload when removeFromCart is called', () => {
    const index = 1;
    const quantity = 1;
    service.removeFromCart(index, quantity);
    expect(store.dispatch).toHaveBeenCalledWith(removeFromCart({ index, quantity }));
  });

  it('should dispatch deleteCartItem action with correct payload when deleteCartItem is called', () => {
    const index = 1;
    service.deleteCartItem(index);
    expect(store.dispatch).toHaveBeenCalledWith(deleteCartItem({ index }));
  });

  it('should dispatch startNewOrder action when startNewOrder is called', () => {
    service.startNewOrder();
    expect(store.dispatch).toHaveBeenCalledWith(startNewOrder());
  });

  it('should dispatch updateCartOrder action with correct payload when updateCartItemOrder is called', () => {
    const previousIndex = 1;
    const newIndex = 2;
    service.updateCartItemOrder(previousIndex, newIndex);
    expect(store.dispatch).toHaveBeenCalledWith(updateCartOrder({ previousIndex, newIndex }));
  });
});
