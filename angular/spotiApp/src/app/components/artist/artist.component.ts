import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotiAppService } from '../../services/spoti-app.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, public _spotiService:SpotiAppService ) { }

  ngOnInit() {
  }

}
