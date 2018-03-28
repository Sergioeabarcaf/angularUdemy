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
      // obtener el objeto y pasarlo a un arreglo de heroe
      for(let i in data ){
        let nodo = data[i];
        nodo.key = i;
        this.heroes.push(data[i]);
      }

    });
  }

  ngOnInit() {
  }

}
