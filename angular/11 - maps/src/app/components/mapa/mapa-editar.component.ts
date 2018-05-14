import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mapa-editar',
  templateUrl: './mapa-editar.component.html',
  styleUrls: ['./mapa-editar.component.css']
})
export class MapaEditarComponent implements OnInit {

  forma: FormGroup;

  constructor(public dialogRef: MatDialogRef<MapaEditarComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public formBuilder:FormBuilder) {
    this.forma = formBuilder.group({
      'titulo': data.titulo,
      'descripcion': data.descripcion
    })

  }

  ngOnInit() {
  }

  guardarCambios(){
    console.log("Se presiono guardar");
    console.log(this.forma);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
