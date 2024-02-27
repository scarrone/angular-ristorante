import { Component } from '@angular/core';
import { Tavolo } from './models/Tavolo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tavoli : Tavolo[] = [

    {
      id : 1,
      numeroPosti : 4,
      rotondo : true,
      riservato : false
    },
    {
      id : 2,
      numeroPosti : 8,
      rotondo : false,
      riservato : true
    }
  ];


}
