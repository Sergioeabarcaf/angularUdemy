import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class SpotiAppService {

  constructor( public http: HttpClient ) {
    console.log("Servicio SpotiApp listo!");
  }

  getArtistas(){
    let url = "https://api.spotify.com/v1/search?q=metallica&type=artist"

    this.http.get(url).subscribe(res => {
      console.log(res);
    })
  }

}
