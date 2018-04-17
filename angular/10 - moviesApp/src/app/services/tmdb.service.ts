import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class TmdbService {

  private apiKey:string = "79b3e58fa02c593b5caeb0072ac7c71b";
  private urlTMDB:string = "https://api.themoviedb.org/3";

  constructor( private http:HttpClient) { }

  getPopulares(){
    let url = `${ this.urlTMDB }/discover/movie?sort_by=popularity.desc&api_key=${ this.apiKey }`;
    return this.http.get(url).map( res => {
      console.log("Esto es en el servicio ",res);
      return res;
    })
  }

  getCartelera(){
    let url = `${ this.urlTMDB }/discover/movie?sort_by=release_date.desc&primary_release_date.gte=2018-02-01&primary_release_date.lte=2018-04-16api_key=${ this.apiKey }`;
    return this.http.get( url ).map( res => {
      console.log(res);
      return res;
    });
  }

  getPopularesInfantil(){
    let url = `${ this.urlTMDB }/discover/movie?certification_country=CL&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apiKey }&lenguaje=es-CLregion=CL`;
    return this.http.get( url ).map( res => {
      console.log(res);
      return res;
    });
  }

  buscarPelicula( texto:string ){
    let url = `${ this.urlTMDB }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`;
    return this.http.get( url ).map( res => res );
  }


}
