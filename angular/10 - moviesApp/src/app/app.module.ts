import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TmdbService } from './services/tmdb.service';

import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieImgPipe } from './pipes/movie-img.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SearchComponent,
    MovieComponent,
    MovieImgPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientJsonpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    APP_ROUTING
  ],
  providers: [TmdbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
