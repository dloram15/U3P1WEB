import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
    constructor(public toastController: ToastController) {
    }
    async presentToast(position: 'top' | 'middle' | 'bottom') {
        const toast = await this.toastController.create({
          message: 'Producto agregado al carrito :)',
          duration: 500,
          position: position,
        });
    
        await toast.present();
      }
    
      async alertHistory(position: 'top' | 'middle' | 'bottom') {
        const toast = await this.toastController.create({
          message: 'Compra realizada con exito :)',
          duration: 500,
          position: position,
        });
    
        await toast.present();
      }
  }

