import { Component } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{

  form:FormGroup;
  movie:string = "";

  arrMovies:any;

  constructor(private _tmdbService:TmdbService, private activatedRoute:ActivatedRoute) {
    this.form = new FormGroup({
      'movies' : new FormControl('',[Validators.required, Validators.minLength(2)])
    })

    this.activatedRoute.params.subscribe( param => {
      console.log(param);
      if(param['param']){
        this.movie = param['param'];
        this.buscar()
      }
    })
  }

  buscar(){
    if(this.form.controls.movies.value > length){
      this.movie = this.form.controls.movies.value;
    }

    this._tmdbService.buscarPelicula(this.movie).subscribe( data => {
      this.arrMovies = data;
    });

  }
}
