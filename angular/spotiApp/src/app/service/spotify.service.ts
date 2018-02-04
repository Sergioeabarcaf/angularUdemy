import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any[];
  urlBusqueda:string = "https://api.spotify.com/v1/search";

  constructor(private http:Http) { }

  getArtista( termino:String ){
    let headers = new Headers();
    headers.append('authorization','Bearer BQAnvpEcHivTiQlBa7lo4hRnKagOhaZ0xGFGnrozOk77PlHSjdWkSoMv-adCrJkhVNwFkNCfg95rXOKya2QJMw')

    let query = `q=${ termino }&type=artist`;
    let url = this.urlBusqueda + query;

    return this.http.get(url , { headers })
            .map( res =>{
              console.log(res);
            })
  }
}
