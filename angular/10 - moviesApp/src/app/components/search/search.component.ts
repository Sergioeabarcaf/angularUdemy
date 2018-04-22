import { Component } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{

  form:FormGroup;

  arrMovies:any;

  constructor(private _tmdbService:TmdbService) {
    this.form = new FormGroup({
      'movies' : new FormControl('',[Validators.required, Validators.minLength(2)])
    })
  }

  buscar(){
    this._tmdbService.buscarPelicula(this.form.controls.movies.value).subscribe( data => {
      this.arrMovies = this.movieValidador(data);
      console.log(this.arrMovies);
    });

  }

  movieValidador(data:any){
    if(data.results.length == 0){
      return false;
    }
    else{
      return data;
    }
  }
}
