import { Component,OnInit } from '@angular/core';
//import {  RespuestaFeriados } from '../interfaces/interfaces';
import { FeriadoService } from '../../services/feriado.service';
import { Feriado } from '../../interfaces/interfaces';
import { MenuController } from '@ionic/angular';



@Component({
  selector: 'app-feriado',
  templateUrl: './feriado.page.html',
  styleUrls: ['./feriado.page.scss']
})
export class FeriadoPage implements OnInit{

  feriados: Feriado[] = [];


  constructor(//private feriado: RespuestaFeriados,
              private menuController: MenuController,
              private feriadosService: FeriadoService) {
  }

  ngOnInit(){
    this.feriadosService.getTopHeadLines().subscribe(resp =>{
      console.log('feriados',resp);
        this.feriados.push(...resp.data);
    });
    
  }

  mostrarMenu(){
    this.menuController.open('first');
  }


}
