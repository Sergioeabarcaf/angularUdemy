import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario:Object = {
    nombre: null,
    apellido: null,
    email: null
  }

  constructor() { }

  ngOnInit() {
  }

  guardar( forma:NgForm ){
    console.log("formulario posteado");
    console.log("ngForm: ", forma);
    console.log("valor: ", forma.value );
    console.log("usuario: ", this.usuario);
  }

}
