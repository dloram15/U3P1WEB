import { Component } from '@angular/core';
import { Historial, Product } from '../models/product.model';
import { CartService } from '../services/cart_services'
import {HistoryService } from '../services/history_services'
import { NavController, NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  public cart: Product[] = [];
  public totalPrice: number = 0;
  public historial: Historial [] = [];
  public currentDate: string="";

  constructor(public cartService: CartService, public historyService: HistoryService) {}


  public deleteToCart(product: Product): void {
    this.cartService.deleteToCart(product);
  }

  public clearCart():void {
    this.cartService.clearCart();
    
  }

}


