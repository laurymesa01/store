import { Component, Input, OnChanges, SimpleChanges, inject, signal } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { CurrencyPipe } from "@angular/common";
import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent{

  hideSideMenu = signal<boolean>(true);
  private cart_service = inject(CartService);
  cart = this.cart_service.cart;
  total = this.cart_service.total;

  toggleSideMenu(){
    this.hideSideMenu.update(prevState => !prevState);
  }

}
