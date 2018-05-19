import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class YoutubeService {

  private urlYoutube:string = "https://www.googleapis.com/youtube/v3/";
  private apiKey:string = "AIzaSyBIZVdSwvS3dAiUo07Anl13TXKHwsn06mo"
  private playlistId:string = "UUOD3DHD_bafDGzGPYxTtRRw"
  private nextPageToken:string = "";


  constructor(private http:Http) { }

  getAllVideosCanal(){
    let url = `${ this.urlYoutube }playlistItems`;
    let params = new URLSearchParams();

    params.set('part','snippet');
    params.set('maxResults','10');
    params.set('playlistId',this.playlistId);
    params.set('key',this.apiKey);

    if(this.nextPageToken){
      params.set('pageToken',this.nextPageToken);
    }

    return this.http.get( url, {search: params} ).map( data => {
      this.nextPageToken = data.json().nextPageToken;
      let videos:any[] = [];
      for(let video of data.json().items){
        videos.push(video.snippet);
      }
      return videos;
    });
  }

}
