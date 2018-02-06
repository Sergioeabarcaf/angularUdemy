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
    let url = `https://api.spotify.com/v1/search?q=${termino}&type=artist`;
    let headers = new HttpHeaders({
      'authorization': 'Bearer BQAk736KogYMIrq_5mxmSwgANqmB-6wy22F77Mrof0vdVLkGvtwkWSjypw_bJWmJr_bLoPKYZwFrtU37Svk'
    });

    return this.http.get(url, { headers }).map( (res:any) =>{
      this.artistas = res.artists.items;
      return this.artistas;
    });
  }

}
