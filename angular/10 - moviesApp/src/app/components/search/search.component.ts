import { Component } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{

  search:string = "";
  arrMovies:any;

  constructor(public _tmdbService:TmdbService, private activatedRoute:ActivatedRoute) {

    this.activatedRoute.params.subscribe( param => {
      if(param['search']){
        this.search = param['search'];
        this.buscar()
      }
    })
  }

  buscar(){
    if(this.search.length == 0){
      return ;
    }
    this._tmdbService.buscarPelicula(this.search).subscribe();
  }
}
