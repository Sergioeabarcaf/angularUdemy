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
  loading:boolean = true;

  constructor(private _heroeService:HeroesService) {
    this._heroeService.getHeroes().subscribe( data => {
      this.heroes = data;
      this.loading = false;
    });
  }

  ngOnInit() {
  }

  eliminarHeroe(key:string){
    this.loading = true;
    this._heroeService.deleteHeroe(key).subscribe( data => {
      if(data){
        console.error(data);
      }
      else{
        this.loading = false;
        delete this.heroes[key];
      }
    });
  }

}
