import { Component, EventEmitter, Output } from '@angular/core';
import { Tavolo } from '../models/Tavolo';
import { TavoliComponent } from '../tavoli/tavoli.component';

@Component({
  selector: 'form-tavolo',
  templateUrl: './form-tavolo.component.html',
  styleUrls: ['./form-tavolo.component.css']
})
export class FormTavoloComponent {

  @Output() aggiungiTavolo = new EventEmitter<Tavolo>();
  idTavolo! : number;
  numeroPosti! : number;
  rotondo! : boolean;
  riservato! : boolean;

  aggiungiNuovoTavolo()
  {
    this.aggiungiTavolo.emit(new Tavolo(this.idTavolo,this.numeroPosti,this.rotondo,this.riservato));
  }
}
