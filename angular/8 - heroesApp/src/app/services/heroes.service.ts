import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../intefaces/heroe.interface';
import 'rxjs/Rx';

@Injectable()
export class HeroesService {

  url:string = "https://heroesapp-24cf4.firebaseio.com/heroes.json";

  constructor(private http:Http) { }

  nuevoHeroe(heroe:Heroe){
    let body = JSON.stringify(heroe);
    let headers = new Headers({
      'Content-Type':'application/json'
    });

    return this.http.post( this.url, body, { headers } ).map( res => {
      console.log(res.json());
      return res.json();
    } )
  }

}
