import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class TmdbService {

  private apiKey:string = "79b3e58fa02c593b5caeb0072ac7c71b";
  private urlTMDB:string = "https://api.themoviedb.org/3";

  constructor( private http:HttpClient) { }

  getPopulares(){
    let url = `${ this.urlTMDB }/discover/movie?sort_by=popularity.desc&api_key=${ this.apiKey }&lenguaje=es`;

    return this.http.get(url).map( res => {
      console.log("Esto es en el servicio ",res);
      return res;
    })
  }

  buscarPelicula( texto:string ){
    let url = `${ this.urlTMDB }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`;
    return this.http.get( url ).map( res => res );
  }

}
