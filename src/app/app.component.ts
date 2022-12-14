import { Component, OnInit } from '@angular/core';
//  import { UsuarioObsService } from './services/usuario-obs.service';
 import { RegisterServService,Usuario } from './services/register-serv.service';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  user: Usuario;
  constructor( ) {
    // private userObs:RegisterServService
        // this.userObs.getUserObservable().subscribe(
        //   (data)=>{
        //     this.user=data;
        //   },
        //   (error)=>{
        //     console.log(error);
        //   }
        // );



        // this.isProfesor=localStorage.getItem('isProfesor');
        // this.isLogin=localStorage.getItem('ingresado');
  }
  // Angular tiene una propiedad que se llama Bind, esto permite que una variable sel controlador este disponible en la vista o html.
  // si se coloca true, esta login, si se coloca false, no esta esta logeado
   isLogin:any = false;
   isProfesor:any ;

   async logOut() {
     if (localStorage.getItem('ingresado')){
        console.log('logout');
        localStorage.clear();
        
     }
    }
    ngOnInit() {
      this.isProfesor=localStorage.getItem('isProfesor');
      this.isLogin=localStorage.getItem('ingresado');

    } 
    
  componentes:Componente[] = [
    {
      icon:'information-outline',
      name:'Inicio',
      redirecTo:'/inicio',
    },

    {
      icon:'list-outline',
      name:'Lista',
      redirecTo:'/lista',
    },

    {
      icon:'camera-outline',
      name:'Scanear',
      redirecTo:'/qr',
    },

    {
      icon:'person-outline',
      name:'User',
      redirecTo:'/user',
    },
    {
      icon:'calendar-number-outline',
      name:'Feriado',
      redirecTo:'/feriado',
    },
    
  ];

  componentesProfe:Componente[] = [
    {
      icon:'information-outline',
      name:'Inicio',
      redirecTo:'/inicio',
    },
    {
      icon:'reader-outline',
      name:'Lista',
      redirecTo:'/lista-prof',
    },
    {
      icon:'qr-code-outline',
      name:'QR',
      redirecTo:'/qr-prof',
    },   
    {
      icon:'person-outline',
      name:'User',
      redirecTo:'/user-prof',
    },
    {
      icon:'calendar-number-outline',
      name:'Feriado',
      redirecTo:'/feriado',
    },
  ];

 

}


