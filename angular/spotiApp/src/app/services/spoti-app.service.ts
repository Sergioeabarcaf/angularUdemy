import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotiAppService {

  artistas:any[] = [];

  constructor( public http: HttpClient ) {
    console.log("Servicio SpotiApp listo!");
  }

  getArtistas(){
    let url = "https://api.spotify.com/v1/search?q=metallica&type=artist";
    let headers = new HttpHeaders({
      'authorization': 'Bearer BQCDiIy9_GXFXMB26rfMlDfSWbI26MW2DTmJmGM6cd88L6p8jRqPbYyU6qd4CpuujhHrEYc39k45tK6oa00'
    });

    return this.http.get(url, { headers }).map( res =>{

    })
  }

}
