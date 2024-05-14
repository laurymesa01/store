import { Component, Input, OnInit, inject, signal } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { ProductService } from '@shared/services/product.service';
import { CurrencyPipe, UpperCasePipe} from "@angular/common";
import { CartService } from '@shared/services/cart.service';

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
  private cart_service = inject(CartService);
  product = signal<Product | null>(null);
  cover = signal<string>('');

  ngOnInit(){
    if (this.id) {
      this.product_service.getProductById(this.id).subscribe({
        next: (product => {
          this.product.set(product);
          if (product.images.length > 0) {
            this.cover.set(product.images[0]);
          }
        })
      })
    }
  }

  changeCover(newImg: string){
    this.cover.set(newImg);
  }

  addToCart(){
    const product = this.product();
    if (product) {
      this.cart_service.addToCart(product);
    }
  }
}
