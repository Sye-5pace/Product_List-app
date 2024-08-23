import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import anime from 'animejs/lib/anime.es.js';
import { ProductsFacadeService } from '../../services/products-facade.service';
import { ResponsiveImagingService } from '../../services/responsive-imaging.service';
import { CartItem, IProduct, ImageType } from '../../store/model/product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit, AfterViewInit, OnDestroy {
  product$!: Observable<IProduct[]>;
  error$!: Observable<any>;
  carts$!: Observable<CartItem[]>;
  hoverIndex!: number | null;
  addTrigger: boolean[] = [];
  cartCounts: number[] = [];
  private unsubscribe$ = new Subject<void>();

  constructor(private productFacade: ProductsFacadeService,
              private imageService: ResponsiveImagingService) {
    this.product$ = this.productFacade.products$;
    this.error$ = this.productFacade.error$;
  }

  ngOnInit() {
    this.productFacade.loadProducts();
    this.product$.pipe(takeUntil(this.unsubscribe$)).subscribe((products) => {
      this.addTrigger = new Array(products.length).fill(false);
      this.cartCounts = new Array(products.length).fill(0);
    });
    this.carts$ = this.productFacade.carts$;
  }

  ngAfterViewInit() {
    this.product$.pipe(takeUntil(this.unsubscribe$)).subscribe((products) => {
      setTimeout(() => {
        const elements = document.querySelectorAll('.card-container .card');
        if (elements.length > 0) {
          anime({
            targets: elements,
            translateX: [-400, 0],
            opacity: [0, 1],
            easing: 'easeInOutQuad',
            delay: anime.stagger(300),
          });
        }
      }, 0);
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
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

  addCart(i: number ): void {
    this.cartCounts[i]++;
    this.productFacade.addToCart(i, 1)
    this.addTrigger[i] = false;
  }

  removeCart(i: number): void{
    if (this.cartCounts[i] > 0){
      this.cartCounts[i]--;
      this.productFacade.addToCart(i, -1);
      this.addTrigger[i] = false;
    }
  }
}
