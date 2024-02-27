import { Component, Input } from '@angular/core';
import { Tavolo } from '../models/Tavolo';

@Component({
  selector: 'lista-tavoli',
  templateUrl: './lista-tavoli.component.html',
  styleUrls: ['./lista-tavoli.component.css']
})
export class ListaTavoliComponent {

  @Input() tavoli : Tavolo[] = [];

}
