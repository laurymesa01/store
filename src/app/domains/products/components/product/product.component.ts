import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { CurrencyPipe, UpperCasePipe, DatePipe } from "@angular/common";
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';
import { HighlightDirective } from '@shared/directives/highlight.directive';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe, UpperCasePipe, DatePipe, TimeAgoPipe, HighlightDirective],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  @Input() product!: Product;

  @Output() addToCart = new EventEmitter();

  addToCartHandler() {
    this.addToCart.emit(this.product);
  }

}
