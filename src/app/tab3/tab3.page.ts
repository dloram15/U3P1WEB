import { Component } from '@angular/core';
import { CartService } from '../services/cart_services'
import { Product } from '../models/product.model';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public products: Product[]=[];
  public productsFounds: Product[]=[];
  
  constructor(public cartService: CartService) {}

    addToCart(product: Product): void {
      this.cartService.addToCart(product);
    }
    
    deleteToCart(product: Product): void {
      this.cartService.deleteToCart(product);
    }
  
    addToFavorites(product: Product): void {
      this.cartService.addToFavorites(product);
    }
  
    removeFromFavorites(product: Product): void {
      this.cartService.removeFromFavorites(product);
    }
}