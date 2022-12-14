import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { InfiniteScrollCustomEvent , LoadingController } from '@ionic/angular';
import { ServQRService } from 'src/app/services/serv-qr.service';


@Component({
  selector: 'app-lista-prof',
  templateUrl: './lista-prof.page.html',
  styleUrls: ['./lista-prof.page.scss'],
})
export class ListaProfPage implements OnInit {

  qrServ=[];

  constructor(private menuController: MenuController, private servQR: ServQRService, private loadingCtrl:LoadingController ) { }

  ngOnInit() {
    this.loadAlumnos();
  }

  mostrarMenu(){
    this.menuController.open('first');
  }


  //service QR GET

  async loadAlumnos(event?: InfiniteScrollCustomEvent){
    const loading = await this.loadingCtrl.create({
        message:"Cargando...",
        spinner:"bubbles"

    });
    await loading.present();

    this.servQR.listarAlumnos().subscribe(
      (resp) =>{
        loading.dismiss();
        console.log(resp);
        let listString = JSON.stringify(resp)
        this.qrServ = JSON.parse(listString)
        event?.target.complete();
        console.log(this.qrServ);
      },
      (err)=>{
        console.log(err.message)
        loading.dismiss();
      }
    )
  }

}
