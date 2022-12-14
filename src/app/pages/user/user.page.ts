import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  constructor(private menuController: MenuController, private alertController: AlertController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  async password() {
    const alert = await this.alertController.create({
      header: 'Ingrese nueva contraseña',
      buttons: ['OK', 'CANCEL'],
      inputs: [
        {
          type: 'password',
          placeholder: 'Contraseña (min 8 characters)',
          attributes: {
            minlength: 8,
          },
        },
        {
          type: 'password',
          placeholder: 'Confirmar contraseña',
          attributes:{
            minlength: 8,
          },
        },
      ],
    });

    await alert.present();
  }




  toggleTheme(event){
    console.log(event.detail);
    if(!event.detail.checked) {
      document.body.setAttribute('color-theme','dark');
    }else{
      document.body.setAttribute('color-theme','light');
    }
  }

}
