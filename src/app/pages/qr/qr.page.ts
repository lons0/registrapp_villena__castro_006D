import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {


  handlerMessage='';
  roleMessage='';

  constructor(private menuController: MenuController , private alertController: AlertController) { }
  
 
  ngOnInit() {
  }

  

  mostrarMenu(){
    this.menuController.open('first');
  }

  async abrirCamara(){
    const alert = await this.alertController.create({
      header: 'Abriendo cámara',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alert confirmed';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }

}
