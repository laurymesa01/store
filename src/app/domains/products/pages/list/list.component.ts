import { Component, signal } from '@angular/core';
import { ProductComponent } from "../../components/product/product.component";
import { Product } from '../../../shared/models/product.model';
import { HeaderComponent } from "../../../shared/components/header/header.component";
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  products = signal<Product[]>([]);

  constructor(){
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Prod 1',
        price: 1000,
        image: 'https://picsum.photos/640/640?r=23'
      },
      {
        id: Date.now(),
        title: 'Prod 2',
        price: 1500,
        image: 'https://picsum.photos/640/640?r=12'
      },
      {
        id: Date.now(),
        title: 'Prod 3',
        price: 300,
        image: 'https://picsum.photos/640/640?r=18'
      },
      {
        id: Date.now(),
        title: 'Prod 4',
        price: 678,
        image: 'https://picsum.photos/640/640?r=20'
      },
      {
        id: Date.now(),
        title: 'Prod 5',
        price: 1000,
        image: 'https://picsum.photos/640/640?r=32'
      },
      {
        id: Date.now(),
        title: 'Prod 6',
        price: 1000,
        image: 'https://picsum.photos/640/640?r=7'
      },
    ];
    this.products.set(initProducts);
  }
}
