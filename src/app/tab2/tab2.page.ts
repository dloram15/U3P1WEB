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
    const existingProduct = this.cartService.getCartItems().find(item => item.name === product.name);
    const existingProduct1 = this.cart.find(item => item.name === product.name);
    
    if (existingProduct && existingProduct1) {
      existingProduct.quantity++;
      existingProduct1.quantity++;
    } else {
      // Crea una copia del producto para evitar modificaciones no deseadas.
      const productToAdd = { ...product };
      productToAdd.quantity = 1;
      this.cartService.addToCart(productToAdd);
      product.quantity = 1;
      this.cart.push(product);
    }
  }

}
