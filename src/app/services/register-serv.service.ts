import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage'
import { ToastController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Usuario{
  nomUsuario:string;
  correoUsuario:string;
  passUsuario:string;
  repassUsuario:string;
  carreraUsuario:string;
  rutUsuario:string;
  usuarioProfesor:boolean;


}

const USERS_KEY='my-users';

@Injectable({
  providedIn: 'root'
})
export class RegisterServService {

  
  private _storage: Storage;
  newUsuario : Usuario = <Usuario>{}

  constructor(private toastController: ToastController, 
              private storage: Storage) {
    this.init();

   }
  //  user: Usuario;


  // private userSubject = new BehaviorSubject(this.newUsuario);

  // getUserObservable(): Observable<Usuario>{
  //   return this.userSubject.asObservable();
  // }

  // private setUser(user:Usuario){
  //   this.user=user;
  //   this.userSubject.next(this.user);
  // }





   async init(){
    const storage = await this.storage.create();
    this._storage =storage;
   }

 

   async addUser(dato:Usuario):Promise<any>{
   return this.storage.get(USERS_KEY).then((datos: Usuario[])=>{
     if(datos){
       datos.push(dato);
       return this.storage.set(USERS_KEY,datos);
     }else{
       return this.storage.set(USERS_KEY,[dato]);
     }
   });
  }

 
  async getUser():Promise<Usuario[]>{
    return this.storage.get(USERS_KEY);
  }



  async showToast(msg){
    const toast = await this.toastController.create({
      message:msg,
      duration: 2000
    })
    await toast.present();
  }


  async clr(){
    this.storage.clear();
  }

}
