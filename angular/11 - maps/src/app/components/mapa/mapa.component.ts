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
    if(localStorage.getItem('marcadores')){
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    }
  }

  ngOnInit() {
  }

  agregarMarcador(evento:any){
    const nuevoMarcador = new Marcador(evento.coords.lat,evento.coords.lng);
    this.marcadores.push(nuevoMarcador);
    this.guardarStorage();
  }

  eliminarMarcador(idx:number){
    
  }

  guardarStorage(){
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

}
