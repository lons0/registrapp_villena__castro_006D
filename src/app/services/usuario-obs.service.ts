import { Injectable } from '@angular/core';
import { RegisterServService,Usuario } from './register-serv.service';
import { BehaviorSubject, Observable } from 'rxjs';


// La intención de este servicio era buscar una manera de actualizar la barra de navegación ya que no se actualizaba solo con nuestra codificación
// así que buscamos un código en internet para intentar solucionarlo, por tiempo no alcanzamos a terminar.

@Injectable({
  providedIn: 'root'
})
export class UsuarioObsService {


  user: Usuario=<Usuario>{};
  constructor(private registerServ:RegisterServService) { }
  
  private userSubject = new BehaviorSubject(this.user);

  getUserObservable(): Observable<Usuario>{
    return this.userSubject.asObservable();
  }

  private setUser(user:Usuario){
    this.user=user;
    this.userSubject.next(this.user);
  }
  


}
