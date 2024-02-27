import { Component, Input } from '@angular/core';

@Component({
  selector: 'tavoli',
  templateUrl: './tavoli.component.html',
  styleUrls: ['./tavoli.component.css']
})
export class TavoliComponent {
  @Input() numeroId! : number;
  @Input() numeroPosti! : number;
  @Input() rotondo! : boolean;
  @Input() riservato! : boolean;

  
}
