import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../clases/marcador';
import { MatSnackBar } from '@angular/material';
import { MatDialog, MatDialogRef } from '@angular/material';
import { MapaEditarComponent } from './mapa-editar.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;



  marcadores:Marcador[] = [];

  constructor(public snackBar: MatSnackBar, public dialog: MatDialog) {
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
    this.snackBar.open('Marcador Agregado', 'Cerrar', {duration: 3000});
  }

  eliminarMarcador(idx:number){
    this.marcadores.splice(idx,1);
    this.guardarStorage();
    this.snackBar.open('Marcador Eliminado', 'Cerrar', {duration: 3000});
  }

  editarMarcador( marcador:Marcador ){
    const dialogRef = this.dialog.open( MapaEditarComponent , {
      width: '250px',
      data: { titulo: marcador.titulo, descripcion: marcador.descripcion }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  guardarStorage(){
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

}
