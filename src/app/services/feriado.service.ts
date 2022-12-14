import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaFeriados } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class FeriadoService {

  

  constructor(private Http:HttpClient) { 
    
  }




  getTopHeadLines(){
    return this.Http.get<RespuestaFeriados>('https://api.victorsanmartin.com/feriados/en.json')
  }
}
