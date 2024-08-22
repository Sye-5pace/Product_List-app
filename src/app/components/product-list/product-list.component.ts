import { Component } from '@angular/core';
import { ImageType, IProduct } from '../../store/model/product';
import { Observable } from 'rxjs';
import { ProductsFacadeService } from '../../services/products-facade.service';
import { CommonModule } from '@angular/common';
import { ResponsiveImagingService } from '../../services/responsive-imaging.service';

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
  hoverIndex!: number | null;

  constructor(private productFacade: ProductsFacadeService,
    private imageService: ResponsiveImagingService
  ){
    this.product$ = this.productFacade.products$;
    this.error$ = this.productFacade.error$;
  }

  ngOnInit(): void{
    this.productFacade.loadProducts();
  }

  getResponsiveImage(image: ImageType): string{
    return this.imageService.getResponsiveImaging(image)
  }

  onMouseEnter(index: number): void {
    this.hoverIndex = index;
  }

  onMouseLeave(): void {
    this.hoverIndex = null;
  }

  triggerHoverState(i: number | null){
    if(this.hoverIndex === i){
      return 'border-tiamaria text-tiamaria';
    }else{
      return 'border-pharlap text-graphite'
    }
  }
}
