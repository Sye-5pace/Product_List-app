import { Component } from '@angular/core';
import { ImageType, IProduct } from '../../store/model/product';
import { Observable } from 'rxjs';
import { ProductsFacadeService } from '../../services/products-facade.service';
import { CommonModule } from '@angular/common';
import { ResponsiveImagingService } from '../../services/responsive-imaging.service';
import { ProductCardComponent } from "../product-card/product-card.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent {

}
