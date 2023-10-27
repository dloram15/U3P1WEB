import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart_services'

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  public cart: Product[] = [];
  public totalPrice: number = 0;

  constructor(public cartService: CartService) {

    

  }


  public removeToCart(product: Product): void {
    this.cartService.removeToCart(product);
  }

  public deleteToCart(product: Product): void {
    this.cartService.deleteToCart(product);
  }

  public clearCart():void {
    this.cartService.clearCart();
    
  }
}
