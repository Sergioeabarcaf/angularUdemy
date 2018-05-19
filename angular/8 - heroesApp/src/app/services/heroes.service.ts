import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../intefaces/heroe.interface';
import 'rxjs/Rx';

@Injectable()
export class HeroesService {

  url:string = "https://heroesapp-24cf4.firebaseio.com/heroes.json";
  urlHeroe:string = "https://heroesapp-24cf4.firebaseio.com/heroes/";

  constructor(private http:Http) { }

  nuevoHeroe(heroe:Heroe){
    let body = JSON.stringify(heroe);
    let headers = new Headers({
      'Content-Type':'application/json'
    });

    return this.http.post( this.url, body, { headers } ).map( res => {
      return res.json();
    } )
  }

  actualizarHeroe(heroe:Heroe, key:string){
    let body = JSON.stringify(heroe);
    let headers = new Headers({
      'Content-Type':'application/json'
    });

    let urlPut = `${ this.urlHeroe }${ key }.json`

    return this.http.put( urlPut, body, { headers } ).map( res => {
      return res.json();
    } )
  }

  getHeroe( key:string ){
    let urlGet = `${ this.urlHeroe }${ key }.json`;
    return this.http.get( urlGet ).map( res => {
      return res.json();
    })
  }

  getHeroes(){
    return this.http.get(this.url).map( res => {
      console.log(res);
      return res.json();
    });
  }

  deleteHeroe(key:string){
    let urlDelete = `${ this.urlHeroe }${ key }.json`;
    return this.http.delete( urlDelete ).map( res => {
      return res.json();
    });
  }

}
