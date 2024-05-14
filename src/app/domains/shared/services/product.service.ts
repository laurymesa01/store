import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient);
  private url = 'https://api.escuelajs.co/api/v1/products';

  constructor() { }

  getProducts(){
    return this.http.get<Product[]>(this.url).pipe(
      map(products =>
        products.map(product => ({
          ...product,
          images: product.images.map(image =>
            this.cleanAndParseImageUrl(image)
          )
        }))
      )
    );
  }

  getProductById(id: string){
    return this.http.get<Product>(`${this.url}/${id}`);
    // .pipe(
    //   map(product => {
    //     product.images.map(image => this.cleanAndParseImageUrl(image))
    //   })
    // );
  }

  private cleanAndParseImageUrl(image: string): string {
    let cleanedImage = image.replace(/^\["?|"?]$/g, '');
    try {
      cleanedImage = JSON.parse(cleanedImage);
    } catch (error) {
      //
    }
    return cleanedImage;
  }
}
