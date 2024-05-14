import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit{

  private product_service = inject(ProductService);

  ngOnInit(){

  }
}
