import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotiAppService {

  artistas:any[] = [];

  constructor( public http: HttpClient ) {
    console.log("Servicio SpotiApp listo!");
  }

  getArtistas(termino:string){
    let url = `https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=50`;
    let headers = new HttpHeaders({
      'authorization': 'Bearer BQBswg3u_1aTJtG1eWVOjqTkHNfATKMeQ7nEgHl3ZaQLb0DMKS3LqNUL2KsIObxl37nG9SKTGH5NbZfy8ts'
    });

    return this.http.get(url, { headers }).map( (res:any) =>{
      this.artistas = res.artists.items;
      return this.artistas;
    });
  }

}
