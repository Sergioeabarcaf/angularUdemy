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
    headers.append('authorization','Bearer BQAWy3i4ct1EFUYOr64bEj2jk-freGrsOysP3vJNndzvQOJrwcV9U8OuPzxS9js9B49SxpdaHlb3N1XHRUA');

    let query = `?q=${ termino }&type=artist`;
    let url = this.urlBusqueda + query;

    return this.http.get(url , { headers })
            .map( res =>{
              console.log(res);
            })
  }
}
