import { Component, OnInit, inject, signal } from '@angular/core';
import { ProductComponent } from "@products/components/product/product.component";
import { Product } from '@shared/models/product.model';
import { HeaderComponent } from "@shared/components/header/header.component";
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/category.model';
import { UpperCasePipe } from "@angular/common";


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent, UpperCasePipe],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit{

  products  = signal<Product[]>([]);
  categories  = signal<Category[]>([]);
  private cart_service = inject(CartService);
  private product_service = inject(ProductService);
  private category_service = inject(CategoryService);


  ngOnInit(){
    this.getProducts();
    this.getCategories();
  }

  addToCart(product: Product){
    this.cart_service.addToCart(product);
  }

  private getProducts(){
    this.product_service.getProducts().subscribe({
      next: (products) => {
        this.products.set(products)
      },
      error: () => {}
    })
  }

  private getCategories(){
    this.category_service.getCategories().subscribe({
      next: (categories) => {
        this.categories.set(categories)
      },
      error: () => {}
    })
  }


}
