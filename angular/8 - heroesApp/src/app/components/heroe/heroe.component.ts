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
      'casa': new FormControl('', Validators.required),
      'key': new FormControl()
    })

   }

  ngOnInit() {
  }

  guardarCambios(){
    this.heroe.nombre = this.forma.controls.nombre.value;
    this.heroe.bio = this.forma.controls.bio.value;
    this.heroe.casa = this.forma.controls.casa.value;
    this.heroe.key = this.forma.controls.key.value;
    console.log(this.heroe);
    // this.forma.reset({
    //   nombre: '',
    //   bio: '',
    //   casa: '',
    //   key: ''
    // });

  }

}
