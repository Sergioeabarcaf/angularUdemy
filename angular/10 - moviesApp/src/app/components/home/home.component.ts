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

  private desde = new Date();
  private hasta = new Date();

  private desdeStr:string;
  private hastaStr:string;

  private cantidad:number = 6;

  constructor(private _tmdbService:TmdbService) { }

  ngOnInit() {
    this.desde.setDate( this.desde.getDate() - 7);

    this.desdeStr = `${ this.desde.getFullYear() }-${ this.desde.getMonth() + 1 }-${ this.desde.getDate()}`;
    this.hastaStr = `${ this.hasta.getFullYear() }-${ this.hasta.getMonth() + 1 }-${ this.hasta.getDate()}`;

    this._tmdbService.getCartelera(this.desdeStr,this.hastaStr,this.cantidad).subscribe( data => {
      this.cartelera = data;
    });
    this._tmdbService.getPopularesInfantil(this.cantidad).subscribe( data => {
      this.popularesInfantil = data;
    });
    this._tmdbService.getPopulares(this.cantidad).subscribe( data => {
      this.populares = data;
    });
  }



}
