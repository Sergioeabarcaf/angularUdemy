import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  forma:FormGroup;
  usuario:Object = {
    nombreCompleto: {
      nombre: "sergio",
      apellido: "abarca"
    },
    email: "sergioabarca@hotmail.com"
  }

  constructor() {

    console.log( this.usuario );

    this.forma = new FormGroup({
      'nombreCompleto': new FormGroup({
        'nombre': new FormControl('',Validators.required),
        'apellido': new FormControl('',[Validators.required, Validators.minLength(3)])
      }),
      'email': new FormControl('',[ Validators.required , Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")])
    })

  }

  guardarCambios(){
    console.log( this.forma.value );
    console.log( this.forma );

  }


}
