import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class TmdbService {

  private apiKey:string = "79b3e58fa02c593b5caeb0072ac7c71b";
  private urlTMDB:string = "https://api.themoviedb.org/3";

  private movieSearch:any;

  constructor( private http:HttpClient) { }

  getPopulares(limite:number){
    let url = `${ this.urlTMDB }/discover/movie?api_key=${ this.apiKey }&region=CL&sort_by=popularity.desc`;
    return this.http.get(url).map( res => {
      return this.trunc(res, limite);
    })
  }

  getCartelera(desdeStr:string, hastaStr:string, limite:number){
    let url = `${ this.urlTMDB }/discover/movie?api_key=${ this.apiKey }&primary_release_date.gte=${ desdeStr }&primary_release_date.lte=${ hastaStr }`;
    return this.http.get( url ).map( res => {
      return this.trunc(res, limite);
    });
  }

  getPopularesInfantil(limite:number){
    let url = `${ this.urlTMDB }/discover/movie?api_key=${ this.apiKey }&certification_country=CL&certification.lte=G&sort_by=popularity.desc&lenguaje=es`;
    return this.http.get( url ).map( res => {
      return this.trunc(res, limite);
    });
  }

  buscarPelicula( texto:string ){
    let url = `${ this.urlTMDB }/search/movie?api_key=${ this.apiKey }&query=${ texto }&sort_by=popularity.desc&language=es`;
    return this.http.get( url ).map( res => {
      this.movieSearch = this.movieValidador(res);
      return this.movieValidador(res);
    });
  }


  trunc(arr:any, limit:number){
    let movies:any[] = [];
    for(let i=0; i<limit; i++){
      movies.push(arr.results[i]);
    }
    console.log(movies);
    return movies;
  }

  movieValidador(data:any){
    if(data.results.length == 0){
      return false;
    }
    else{
      return data.results;
    }
  }

}
