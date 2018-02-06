import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotiAppService {

  artistas:any[] = [];
  artista:any[] = [];
  urlSpotify:string = 'https://api.spotify.com/v1/';
  token:string = 'BQBswg3u_1aTJtG1eWVOjqTkHNfATKMeQ7nEgHl3ZaQLb0DMKS3LqNUL2KsIObxl37nG9SKTGH5NbZfy8ts';

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
    let url = `${ this.urlSpotify }search?q=${termino}&type=artist&limit=50`;
    let headers = this.getHeaders();

    return this.http.get(url, { headers }).map( (res:any) =>{
      this.artistas = res.artists.items;
      return this.artistas;
    });
  }

  getArtista(id:string){
    let url = `${ this.urlSpotify }artists/${ id }`;
    let headers = this.getHeaders();

    return this.http.get(url, { headers }).map( (res:any) =>{
      this.artista = res;
      return this.artistas;
    });
  }

}
