import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];

  getCartItems() {
    return this.cartItems;
  }

  addToCart(product: Product) {
    const existingProduct = this.cartItems.find(item => item.name === product.name);

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      // Crea una copia del producto para evitar modificaciones no deseadas.
      const productToAdd = { ...product };
      productToAdd.quantity = 1;
      this.cartItems.push(productToAdd);
    }
  }

  removeToCart(product: Product) {
    const existingProduct = this.cartItems.find(item => item.name === product.name);

    if (existingProduct) {
      existingProduct.quantity--;
    } else {
      const productToRemove = { ...product };
      productToRemove.quantity = -1;
      this.cartItems.push(productToRemove);
  
    }
  }

  getTotalPrice() {
    return this.cartItems.reduce((total, item) => total + item.price*item.quantity, 0);
  }

  clearCart() {
    this.cartItems = [];
  }
}
