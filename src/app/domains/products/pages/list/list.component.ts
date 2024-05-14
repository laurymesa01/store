import { Component, Input, OnChanges, OnInit, SimpleChanges, inject, signal } from '@angular/core';
import { ProductComponent } from "@products/components/product/product.component";
import { Product } from '@shared/models/product.model';
import { HeaderComponent } from "@shared/components/header/header.component";
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/category.model';
import { UpperCasePipe } from "@angular/common";
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';



@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    ProductComponent,
    HeaderComponent,
    UpperCasePipe,
    RouterLinkWithHref,
    RouterLinkActive
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit, OnChanges{

  @Input() category_id?: string = '';

  products  = signal<Product[]>([]);
  categories  = signal<Category[]>([]);
  private cart_service = inject(CartService);
  private product_service = inject(ProductService);
  private category_service = inject(CategoryService);

  ngOnChanges(){
    this.getProducts()
  }

  ngOnInit(){
    this.getCategories();
  }

  addToCart(product: Product){
    this.cart_service.addToCart(product);
  }

  private getProducts(){
    this.product_service.getProducts(this.category_id).subscribe({
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
