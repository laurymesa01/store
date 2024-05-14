import { Component, inject, signal } from '@angular/core';
import { CurrencyPipe } from "@angular/common";
import { CartService } from '@shared/services/cart.service';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CurrencyPipe, RouterLinkWithHref, RouterLinkActive],
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
