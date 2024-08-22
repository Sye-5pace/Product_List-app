import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsFacadeService } from '../../services/products-facade.service';
import { ResponsiveImagingService } from '../../services/responsive-imaging.service';
import { CartItem, IProduct, ImageType } from '../../store/model/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})

export class ProductCardComponent {
  product$!: Observable<IProduct[]>;
  error$!: Observable<any>;
  carts$!: Observable<CartItem[]>;
  hoverIndex!: number | null;
  addTrigger: boolean[] = [];
  cartCounts: number[] = [];

  constructor(private productFacade: ProductsFacadeService,
              private imageService: ResponsiveImagingService) {
    this.product$ = this.productFacade.products$;
    this.error$ = this.productFacade.error$;
  }

  ngOnInit(): void {
    this.productFacade.loadProducts();
    this.product$.subscribe((products) => {
      this.addTrigger = new Array(products.length).fill(false);
      this.cartCounts = new Array(products.length).fill(0);
    });
    this.carts$ = this.productFacade.carts$;
  }

  getResponsiveImage(image: ImageType): string {
    return this.imageService.getResponsiveImaging(image);
  }

  onMouseEnter(index: number): void {
    this.hoverIndex = index;
  }

  onMouseLeave(): void {
    this.hoverIndex = null;
  }

  cartAddTrigger(i: number): void {
    this.addTrigger[i] = !this.addTrigger[i];
  }

  triggerHoverState(index: number): { [key: string]: boolean } {
    return {
      'border-tiamaria text-tiamaria': this.hoverIndex === index && !this.addTrigger[index],
      'border-pharlap text-graphite': this.hoverIndex !== index || this.addTrigger[index]
    };
  }

  addCart(i: number, product: IProduct): void {
    this.cartCounts[i]++;
    this.productFacade.addToCart({
      name: product.name,
      price: product.price,
      thumbnail: product.image['thumbnail'],
      quantity: this.cartCounts[i]
    });
    this.addTrigger[i] = false;
  }

  


}
