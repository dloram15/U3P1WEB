import { Component } from '@angular/core';
import { Product, Historial } from '../models/product.model';
import { CartService } from '../services/cart_services'
import { NavController, NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public cart: Product[] = [];
  public totalPrice: number = 0;
  public historial: Historial [] = [];
  public currentDate: string="";

  constructor(public cartService: CartService, public navCtrl: NavController, public route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.totalPrice = params['totalPrice'];
      this.currentDate = params['currentDate'];
    });
  }
  public addToCartA(product: Product): void {
    this.cartService.addToCartA(product);
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

  public addToHistory(product: Product): void {
    this.cartService.addToCartA(product);
  }

  realizarCompra() {
  const totalPrice = this.cartService.getTotalPrice();
  const currentDate = new Date().toLocaleDateString();

  console.log(totalPrice);

  const historialItem: Historial = {date: this.currentDate,totalprice: this.totalPrice};
  console.log(historialItem);


  
  
  }
}
