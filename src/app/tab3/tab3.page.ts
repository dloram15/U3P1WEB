import { Component } from '@angular/core';
import { CartService } from '../services/cart_services'
import { Product } from '../models/product.model';
import { AlertService } from '../services/alert'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  
  constructor(public cartService: CartService, public alertService: AlertService) {}

    addToCartA(product: Product): void {
      this.cartService.addToCartA(product);
      this.alertService.presentToast('middle')
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