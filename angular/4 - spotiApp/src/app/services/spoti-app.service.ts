import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotiAppService {

  artistas:any[] = [];
  artista:any[] = [];
  urlSpotify:string = 'https://api.spotify.com/v1/';
  token:string = 'BQDh8vBqRZfIA7HxsJVKkCtnpeqH1x36S0qLMqSSazEsBIOtk-5xoHpzWXRvU5OW89t38_IrkH-Rsd0n7ek';

  constructor( public http: HttpClient ) {
    console.log("Servicio SpotiApp listo!");
  }

  private getHeaders():HttpHeaders{
    let headers = new HttpHeaders({
      'authorization': 'Bearer ' + this.token
    });

    return headers;
  }

  getArtistas(termino:string){
    let url = `${ this.urlSpotify }search?q=${termino}&type=artist`;
    let headers = this.getHeaders();

    return this.http.get(url, { headers }).map( (res:any) =>{
      this.artistas = res.artists.items;
      return this.artistas;
    });
  }

  getArtista(id:string){
    let url = `${ this.urlSpotify }artists/${ id }`;
    let headers = this.getHeaders();

    return this.http.get(url, { headers });
  }

  getTop(id:string){
    let url = `${ this.urlSpotify }artists/${ id }/top-tracks?country=CL`;
    let headers = this.getHeaders();

    return this.http.get(url, { headers });
  }

}
