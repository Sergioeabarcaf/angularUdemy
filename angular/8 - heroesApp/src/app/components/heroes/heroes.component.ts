import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../intefaces/heroe.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor(private _heroeService:HeroesService) {
    this._heroeService.getHeroes().subscribe( data => {
      this.heroes = data;
    });
  }

  ngOnInit() {
  }

  eliminarHeroe(key:string){
    this._heroeService.deleteHeroe(key).subscribe( data => {
      if(data){
        console.error(data);
      }
      else{
        delete this.heroes[key];
      }
    });
  }

}
