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
      'authorization': 'Bearer BQB6SwLIjy6YOpwtV0gj18q9xwbp4l8d1GfgBPd2OT2BMRswecj5C6cuBtHSFA2wz5vAPk7pkCu3ZD3WN4w'
    });

    return this.http.get(url, { headers }).map( (res:any) =>{
      this.artistas = res.artists.items;
      return this.artistas;
    });
  }

}
