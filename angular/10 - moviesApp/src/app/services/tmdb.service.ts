import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class TmdbService {

  private apiKey:string = "79b3e58fa02c593b5caeb0072ac7c71b";
  private urlTMDB:string = "https://api.themoviedb.org/3";

  constructor( private http:HttpClient) { }

  getPopulares(){
    let url = `${ this.urlTMDB }/discover/movie?api_key=${ this.apiKey }&region=CL&sort_by=popularity.desc`;
    return this.http.get(url).map( res => {
      return res;
    })
  }

  getCartelera(inicio:string, hoy:string){
    let url = `${ this.urlTMDB }/discover/movie?api_key=${ this.apiKey }&primary_release_date.gte=${ inicio }&primary_release_date.lte=${ hoy }`;
    return this.http.get( url ).map( res => {
      return res;
    });
  }

  getPopularesInfantil(){
    let url = `${ this.urlTMDB }/discover/movie?api_key=${ this.apiKey }&certification_country=CL&certification.lte=G&sort_by=popularity.desc&lenguaje=es-CLregion=CL`;
    return this.http.get( url ).map( res => {
      return res;
    });
  }

  buscarPelicula( texto:string ){
    let url = `${ this.urlTMDB }/search/movie?api_key=${ this.apiKey }&query=${ texto }&sort_by=popularity.desc&language=es`;
    return this.http.get( url ).map( res => {
      console.log(res);
      return res;
    });
  }


}
