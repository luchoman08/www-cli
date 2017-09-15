import { Component } from '@angular/core';

import * as data from './historias.json';



@Component({
  selector: 'historias',
  templateUrl: './historias.component.html' ,
  styleUrls: ['./historias.component.css'],
})

export class HistoriasComponent {
  title = 'Historias';
  public historias = data;
  public historia = data[1];
  private historiaSeleccionada: number;
  constructor(){this.historiaSeleccionada = 0;}
  
  siguienteHistoria(){
      this.historiaSeleccionada++;
      this.historia = this.historias[this.historiaSeleccionada];
  }
  
  anteriorHistoria(){
    this.historiaSeleccionada--;
    this.historia = this.historias[this.historiaSeleccionada];
    
  }
  
}

