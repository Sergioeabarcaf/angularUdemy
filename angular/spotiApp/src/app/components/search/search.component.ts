import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../service/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  constructor( public _spotify:SpotifyService ) {
    this._spotify.getArtista('romeo').subscribe(resp =>{
      console.log("informacion lista");
      console.log(resp);
    });

   }


  ngOnInit() {
  }

}
