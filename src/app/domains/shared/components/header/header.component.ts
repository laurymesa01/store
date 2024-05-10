import { Component, Input, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { CurrencyPipe } from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Input() cart: Product[] = [];

  hideSideMenu = signal<boolean>(true);

  toggleSideMenu(){
    this.hideSideMenu.update(prevState => !prevState);
  }

  getTotalPrice(){
    return this.cart.reduce((total, product) => total + product.price, 0)
  }

}
