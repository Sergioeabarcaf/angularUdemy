import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Heroe } from '../../intefaces/heroe.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  forma:FormGroup;

  heroe:Heroe = {
    nombre: "",
    bio: "",
    casa: "",
    key: ""
  }

  constructor() {

    this.forma = new FormGroup ({
      'nombre': new FormControl('',Validators.required),
      'bio': new FormControl('', Validators.required),
      'casa': new FormControl('',Validators.required),
      'key': new FormControl()
    })

   }

  ngOnInit() {
  }

  guardarCambios(){
    console.log(this.forma)
    this.forma.reset({
      nombre: '',
      bio: '',
      casa: '',
      key: ''
    });

  }

}
