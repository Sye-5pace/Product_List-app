import { Component } from '@angular/core';
import { IProduct } from '../../store/model/product';
import { Observable } from 'rxjs';
import { ProductsFacadeService } from '../../services/products-facade.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent {
  product$!: Observable<IProduct[]>;
  error$!: Observable<any>;

  constructor(private productFacade: ProductsFacadeService){
    this.product$ = this.productFacade.products$;
    this.error$ = this.productFacade.error$;
  }

  ngOnInit(): void{
    this.productFacade.loadProducts();
  }
}
