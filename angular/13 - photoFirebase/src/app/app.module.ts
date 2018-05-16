import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { PhotosComponent } from './components/photos/photos.component';
import { CargaComponent } from './components/carga/carga.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    CargaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
