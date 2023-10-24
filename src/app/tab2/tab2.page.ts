import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart_services'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public cart: Product[] = [];
  public totalPrice: number = 0;

  constructor(public cartService: CartService) {

    

  }
  public addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }

  public removeToCart(product: Product): void {
    this.cartService.removeToCart(product);
  }
}
