import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieImg'
})
export class MovieImgPipe implements PipeTransform {

  transform(movie: any): string {
    let url = "http://image.tmdb.org/t/p/w500"

    if( movie.poster_path ){
      return url + movie.poster_path;
    }
    else{
      if(movie.backdrop_path){
        return url + movie.backdrop_path;
      }
      else{
        return "assets/noAvaible.jpg";
      }
    }
  }
}
