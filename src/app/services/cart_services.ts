import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];
  public productosFavoritos: Product[] =[];

  getCartItems() {
    return this.cartItems;
  }


  addToCartA(product: Product) {
    const existingProduct = this.cartItems.find(item => item.name === product.name);

    if (existingProduct) {
      existingProduct.quantity++;
      this.AutoCloseAlert();
    } else {
      const productToAdd = { ...product };
      productToAdd.quantity = 1;
      this.cartItems.push(productToAdd);
      this.AutoCloseAlert();
    }
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
  constructor(private alertController: AlertController) { }
  async AutoCloseAlert() {
    const alert = await this.alertController.create({
      header: 'Agregado al carrito :)'});

    await alert.present();

    setTimeout(() => {
      alert.dismiss();
    }, 300); // 5000 milisegundos (5 segundos)
  }
  removeToCart(product: Product) {
    const existingProductIndex = this.cartItems.findIndex(item => item.name === product.name);
  
    if (existingProductIndex !== -1) {
      const existingProduct = this.cartItems[existingProductIndex];
  
      if (existingProduct.quantity > 1) {
        existingProduct.quantity--;
      } else {
        this.cartItems.splice(existingProductIndex, 1);
      }
    }
  }

  deleteToCart(product: Product){
    const existingProductIndex = this.cartItems.findIndex(item => item.name === product.name);
    this.cartItems.splice(existingProductIndex, 1);
  }
  
  

  getTotalPrice() {
    return this.cartItems.reduce((total, item) => total + item.price*item.quantity, 0);
  }

  clearCart() {
    this.cartItems = [];
  }

  addToFavorites(product: Product): void {
    if (!this.isProductInFavorites(product)) {
      this.productosFavoritos.push(product);
      product.favorito = true;
    }
  }
  
  isProductInFavorites(product: Product): boolean {
    return this.productosFavoritos.some((p) => p === product);
  }
  

  removeFromFavorites(product: Product): void {
    const index = this.productosFavoritos.findIndex((p) => p === product);
    if (index !== -1) {
      this.productosFavoritos.splice(index, 1);
      product.favorito = false;
    }
  }
}


