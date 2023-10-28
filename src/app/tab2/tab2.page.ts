import { Component } from '@angular/core';
import { Product} from '../models/product.model';
import { CartService } from '../services/cart_services'
import { HistoryService } from '../services/history_services'
import { AlertService } from '../services/alert'



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  constructor(public cartService: CartService,public historyService: HistoryService,public alertService: AlertService) {
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

  //History
  addToHistory3(){
    this.historyService.addToHistory3();
    this.alertService.alertHistory('middle')
  }
}