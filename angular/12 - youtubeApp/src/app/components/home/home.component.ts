import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videos:any[] = [];
  videoSelec:any;

  constructor(public _youtubeService:YoutubeService) {
    this._youtubeService.getAllVideosCanal().subscribe( data => this.videos = data );
  }

  ngOnInit() {
  }

  cargarMas(){
    this._youtubeService.getAllVideosCanal().subscribe( data => this.videos.push.apply(this.videos, data));
  }

  verVideo( video:any ){
    this.videoSelec = video;
    $('#exampleModal').modal();
  }

  cerrarModal(){
    this.videoSelec = null;
    $('#exampleModal').modal('hide');
  }

}
