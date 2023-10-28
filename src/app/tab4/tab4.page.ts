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

  constructor(public cartService: CartService, public navCtrl: NavController, public route: ActivatedRoute,public historyService: HistoryService) {
    this.route.queryParams.subscribe(params => {
      this.totalPrice = params['totalPrice'];
      this.currentDate = params['currentDate'];
    });
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



  realizarCompra() {
    // Obtén el precio total
    const totalPrice = this.cartService.getTotalPrice();
  
    // Obtén la fecha actual
    const currentDate = new Date().toLocaleDateString();
  
    // Navega a la página de resumen de compra y pasa los datos como parámetros
    this.navCtrl.navigateForward('/order-summary', {
      queryParams: {
        totalPrice,
        currentDate,
      }
    });
  }
}


