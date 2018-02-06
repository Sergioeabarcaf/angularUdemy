import { Component, OnInit } from '@angular/core';
import { SpotiAppService } from '../../services/spoti-app.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  termino:string = ' ';

  constructor(public _spotiApp:SpotiAppService ) { }

  buscarArtista(){
    if (this.termino.length > 0) {
      this._spotiApp.getArtistas(this.termino).subscribe(artistas =>{})
    }
  }
}
