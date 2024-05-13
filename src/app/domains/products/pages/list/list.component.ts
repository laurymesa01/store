import { Component, OnInit, inject, signal } from '@angular/core';
import { ProductComponent } from "@products/components/product/product.component";
import { Product } from '@shared/models/product.model';
import { HeaderComponent } from "@shared/components/header/header.component";
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit{

  products  = signal<Product[]>([]);
  private cart_service = inject(CartService);
  private product_service = inject(ProductService);

  ngOnInit(){
    this.product_service.getProducts().subscribe({
      next: (products) => {
        console.log(products);

        this.products.set(products)
      },
      error: () => {}
    })
  }

  addToCart(product: Product){
    this.cart_service.addToCart(product);
  }


}
