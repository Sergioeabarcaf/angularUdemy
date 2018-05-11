import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../clases/marcador';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  title: string = 'Mapas';
  lat: number = 51.678418;
  lng: number = 7.809007;

  marcadores:Marcador[] = [];

  constructor() {
    const nuevoMarcador = new Marcador(51.678418,7.809007);
    this.marcadores.push(nuevoMarcador);
  }

  ngOnInit() {
  }

  agregarMarcador(evento:any){
    const nuevoMarcador = new Marcador(evento.coords.lat,evento.coords.lng);
    this.marcadores.push(nuevoMarcador);
  }

}
