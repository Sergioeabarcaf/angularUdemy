import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent implements OnInit {

  usuario:Object = {
    nombre: "sergio",
    apellido: "abarca",
    email: "sergio@perro.com"
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
