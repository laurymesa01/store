import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { CurrencyPipe, UpperCasePipe, DatePipe } from "@angular/common";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe, UpperCasePipe, DatePipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  @Input() product!: Product;

  @Output() addToCart = new EventEmitter();

  addToCartHandler() {
    console.log('click form child');
    this.addToCart.emit(this.product);
  }

}
