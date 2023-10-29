import { Injectable } from '@angular/core';
import { Historial } from '../models/product.model';
import { CartService } from '../services/cart_services';
import { CurrencyPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
 private historyItems: Historial[] = [];

 constructor(private cartService: CartService) { }

 addToHistory3(){
  const totalprice = this.cartService.getTotalPrice(); 
  const cartItems = this.cartService.getCartItems();
  const newHistory: Historial = { date: new Date().toDateString(), totalprice: totalprice, items: cartItems};
  this.historyItems.push(newHistory);
  this.cartService.clearCart();
}

  getHistoryItems() {
    return this.historyItems;
  }
  
  addToHistory(historial: Historial) {
    this.historyItems.push(historial);
  }
  

  clearHistoriales() {
    this.historyItems = [];
  }
}

