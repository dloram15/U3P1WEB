import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart_services'
import { AlertService } from '../services/alert'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public products: Product[]=[];
  public productsFounds: Product[]=[];
  public filter = [
    "Abarrotes",
    "Limpieza",
    "Vinos y Licores",
    "Farmacia",
  ];  

  public cart : Product[] = [];
  

  constructor(public cartService: CartService, public alertService: AlertService) {
    this.products.push({
      name: "Coca Cola",
      price: 20,
      description: "Refresco de cola 600 ml",
      type: "Abarrotes",
      photo: "http://picsum.photos/500/300?random=",
      quantity:0,
      favorito:false
    })
    this.products.push({
      name: "Jabon Zote",
      price: 10,
      description: "Jabon en barra 300 gr",
      type: "Limpieza",
      photo: "http://picsum.photos/500/300?random=",
      quantity:0,
      favorito:false
    })
    this.products.push({
      name: "Tequila",
      price: 200,
      description: "Jose Cuervo Tradicional 900 ml",
      type: "Vinos y Licores",
      photo: "http://picsum.photos/500/300?random=",
      quantity:0,
      favorito:false
    })
    this.products.push({
      name: "Clonazepam",
      price: 50,
      description: "Pastillas para dormir 20 pzs",
      type: "Farmacia",
      photo: "http://picsum.photos/500/300?random=",
      quantity:0,
      favorito:false
    })

    this.productsFounds = this.products;
  }

  public filterProducts():void{
    console.log(this.filter);
    this.productsFounds = this. products.filter(
      (item)=>{
      return this.filter.includes(item.type);
    });
  }

  public addToCartA(product: Product): void {
    this.cartService.addToCartA(product);
  }

  public getTotalPrice(): number {
    return this.cart.reduce((total, product) => total + product.price*product.quantity, 0);
  }

  addToFavorites(product: Product): void {
    this.cartService.addToFavorites(product);
  }

  alert():void{
    this.alertService.presentToast('middle');
  }

}