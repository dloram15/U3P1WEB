import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];
  public cart : Product[] = [];

  getCartItems() {
    return this.cartItems;
  }



  addToCart(product: Product) {
    const existingProduct = this.cartItems.find(item => item.name === product.name);

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      const productToAdd = { ...product };
      productToAdd.quantity = 1;
      this.cartItems.push(productToAdd);
    }
  }

  removeToCart(product: Product) {
    const existingProduct = this.cartItems.find(item => item.name === product.name);

    if (existingProduct) {
      const productToremove = { ...product };
      productToremove.quantity = -1;
      this.cartItems.push(productToremove);
    } else {

    }
  }

  getTotalPrice() {
    return this.cartItems.reduce((total, item) => total + item.price*item.quantity, 0);
  }

  clearCart() {
    this.cartItems = [];
  }
}
