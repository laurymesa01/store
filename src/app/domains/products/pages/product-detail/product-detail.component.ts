import { Component, Input, OnInit, inject, signal } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { ProductService } from '@shared/services/product.service';
import { CurrencyPipe, UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe, UpperCasePipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit{

  @Input() id?: string = '';

  private product_service = inject(ProductService);
  product = signal<Product | null>(null);

  ngOnInit(){
    if (this.id) {
      this.product_service.getProductById(this.id).subscribe({
        next: (product => {
          console.log(product);
          this.product.set(product);
        })
      })
    }
  }
}
