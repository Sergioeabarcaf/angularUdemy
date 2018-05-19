import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie:any;
  origin:string = "";
  search:string = "";

  constructor(public _tmdbService:TmdbService, private activatedRoute:ActivatedRoute) {

    this.activatedRoute.params.subscribe( param => {
      this.origin = param['pag'];
      if(param['search']){
        this.search = param['search'];
      }
      this._tmdbService.getMovie(param['id']).subscribe(res => {
        console.log(res);
        this.movie = res;
      })
    })
  }

  ngOnInit() {
  }

}
