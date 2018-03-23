import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

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
    email: "sergioabarca@hotmail.com",
    hobbies:['correr', 'dormir', 'programar']
  }

  noPalabras:string[] = [
    "perro",
    "gato",
  ]

  constructor() {

    console.log( this.usuario );

    this.forma = new FormGroup({
      'nombreCompleto': new FormGroup({
        'nombre': new FormControl('',Validators.required),
        'apellido': new FormControl('',[Validators.required, Validators.minLength(3), this.palabrasNoPermitidas])
      }),
      'email': new FormControl('',[ Validators.required , Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      'hobbies': new FormArray([
        new FormControl('Correr', Validators.required )
      ])
    })

    // this.forma.setValue( this.usuario );

  }

  addHobbies(){
    (<FormArray>this.forma.controls['hobbies']).push(
      new FormControl('', Validators.required )
    )
  }

  palabrasNoPermitidas( control:FormControl ): {[s:string]:boolean} {
    if(control.value === "perro"){
      return {palabrasNoPermitidas: true};
    }
    else{
      return null;
    }
  }

  guardarCambios(){
    console.log( this.forma.value );
    console.log( this.forma );
    this.forma.reset({
      nombreCompleto:{
        nombre: '',
        apellido: ''
      },
      email:''
    });

  }




}
