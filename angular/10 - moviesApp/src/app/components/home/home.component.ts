import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private cartelera:any;
  private popularesInfantil:any;
  private populares:any;

  constructor(private _tmdbService:TmdbService) { }

  ngOnInit() {
    this._tmdbService.getCartelera("2018-03-26","2018-04-16").subscribe( data => this.cartelera = data);
    this._tmdbService.getPopularesInfantil().subscribe( data => this.popularesInfantil = data);
    this._tmdbService.getPopulares().subscribe( data => this.populares = data);
  }

}
