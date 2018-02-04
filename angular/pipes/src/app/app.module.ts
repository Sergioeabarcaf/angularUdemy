import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContrasenaPipe } from './pipe/contrasena.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContrasenaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
