import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ServQRService } from 'src/app/services/serv-qr.service';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/interfaces/alumno';

@Component({
  selector: 'app-qr-prof',
  templateUrl: './qr-prof.page.html',
  styleUrls: ['./qr-prof.page.scss'],
})
export class QrProfPage implements OnInit {

  qrCodeString:any;
  scannedResult:any;

  handlerMessage='';
  roleMessage='';

  // qrServ = [];

  newAlumno: Alumno= {
    alumno:"",
    seccion:"",
    fecha:""
  }

  constructor(private menuController: MenuController , private alertController: AlertController, 
              private servQR:ServQRService, private LoadingCtrl: LoadingController, private router: Router ) { }

  usuario={
    nom:'',
  }

  ngOnInit() {
  }


  generaScan(){
    this.qrCodeString= `${this.newAlumno.seccion} ${this.newAlumno.fecha} `  ;

  }

  verScan(){
    this.scannedResult=this.qrCodeString;
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  async abrirCamara(){
    const alert = await this.alertController.create({
      header: 'Generando código',
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


//service QR GET

  // async loadAlumnos(event?: InfiniteScrollCustomEvent){
  //   const loading = await this.LoadingCtrl.create({
  //       message:"Cargando...",
  //       spinner:"bubbles"

  //   });
  //   await loading.present();
  //   this.servQR.listarAlumnos().subscribe(
  //     (resp) =>{
  //       loading.dismiss();
  //       let listString = JSON.stringify(resp)
  //       this.qrServ = JSON.parse(listString)
  //       event?.target.complete();
  //       console.log(this.qrServ);
  //     },
  //     (err)=>{
  //       console.log(err.message)
  //       loading.dismiss();
  //     }
  //   )
  // }

//service qr POST

  crearAlumno(){
    this.servQR.crearAlumno(this.newAlumno).subscribe();
    console.log(this.newAlumno);

  }

}
