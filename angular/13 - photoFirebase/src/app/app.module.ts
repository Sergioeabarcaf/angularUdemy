import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app.routes';

import { CargaImgService } from './services/carga-img.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { PhotosComponent } from './components/photos/photos.component';
import { CargaComponent } from './components/carga/carga.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    CargaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [CargaImgService],
  bootstrap: [AppComponent]
})
export class AppModule { }
