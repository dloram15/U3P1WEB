import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart_services'

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
  

  constructor(public cartService: CartService) {
    this.products.push({
      name: "Coca Cola",
      price: 20,
      description: "Taylor",
      type: "Abarrotes",
      photo: "http://picsum.photos/500/300?random=",
      quantity:0
    })
    this.products.push({
      name: "Jabon Zote",
      price: 10,
      description: "Taylor",
      type: "Limpieza",
      photo: "http://picsum.photos/500/300?random=",
      quantity:0
    })
    this.products.push({
      name: "Tequila",
      price: 200,
      description: "Taylor",
      type: "Vinos y Licores",
      photo: "http://picsum.photos/500/300?random=",
      quantity:0
    })
    this.products.push({
      name: "Clonazepam",
      price: 50,
      description: "Taylor",
      type: "Farmacia",
      photo: "http://picsum.photos/500/300?random=",
      quantity:0
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

  public addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }

  public getTotalPrice(): number {
    return this.cart.reduce((total, product) => total + product.price*product.quantity, 0);
  }
}