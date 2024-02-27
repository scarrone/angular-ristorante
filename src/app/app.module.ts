import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaTavoliComponent } from './lista-tavoli/lista-tavoli.component';
import { FormTavoloComponent } from './form-tavolo/form-tavolo.component';
import { TavoliComponent } from './tavoli/tavoli.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListaTavoliComponent,
    FormTavoloComponent,
    TavoliComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
