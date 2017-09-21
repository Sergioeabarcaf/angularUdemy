import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../service/heroes.service';

@Component({
  selector: 'app-heroe-search',
  templateUrl: './heroe-search.component.html'
})
export class HeroeSearchComponent implements OnInit {

  heroeBuscar:any[] = [];
  termino:string;

  constructor( private activatedRoute:ActivatedRoute, private _heroesService:HeroesService ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params =>{
      this.termino = params['termino'];
      this.heroeBuscar = this._heroesService.buscarHeroe( params['termino']);
      console.log(this.heroeBuscar);
    })
  }

}
