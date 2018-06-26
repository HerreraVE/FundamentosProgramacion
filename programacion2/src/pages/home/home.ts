import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  numero1: string;
  resultado: number;

  constructor(public navCtrl: NavController) {

  }

  calcular() {
    let aSumar = [];
    let largo = this.numero1.length;
    let elemento = 1;
    let i = 1;
    aSumar.push(elemento);
    while(i<largo){
      elemento = elemento*2;
      aSumar.push(elemento);
      i = i + 1;
    }
    let aSumarCorrecto = [];
    i = 1;
    while(i<=largo){
      elemento = aSumar[largo-i];
      aSumarCorrecto.push(elemento);
      i = i + 1;
    }
    i = 0;
    this.resultado = 0;
    while(i<largo){
      if ( this.numero1[i] == '1' ){
        this.resultado = this.resultado + aSumarCorrecto[i];
      }
      i = i + 1;
    }
  }
}
