import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotiAppService } from '../../services/spoti-app.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artista:any = {};
  topArtista:any = {};

  constructor(private activatedRoute:ActivatedRoute, public _spotiService:SpotiAppService ) { }

  ngOnInit() {
    this.activatedRoute.params.map( params => params['id']).subscribe(id =>{
      this._spotiService.getArtista( id ).subscribe( respArtista => {
        console.log(respArtista);
        this.artista = respArtista;
      });

      this._spotiService.getTop( id ).map((resp:any) => resp.tracks).subscribe( pistas => {
        console.log(pistas);
        this.topArtista = pistas;
      });
    })
  }

}
