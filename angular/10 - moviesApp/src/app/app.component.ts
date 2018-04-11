import { Component } from '@angular/core';
import { TmdbService } from './services/tmdb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private _tmdbService:TmdbService){
    this._tmdbService.getPopulares().subscribe( data => console.log("esto es en app.component ", data));
  }


}
