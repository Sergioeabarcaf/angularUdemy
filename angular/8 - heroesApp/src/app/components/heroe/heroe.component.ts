import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Heroe } from '../../intefaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  forma:FormGroup;

  private heroe:Heroe = {
    nombre: "",
    bio: "",
    casa: "",
    key: ""
  }

  nuevo:boolean = true;
  id:string;

  constructor(private _heroesServices:HeroesService, private router:Router, private activatedRoute:ActivatedRoute ) {

    this.forma = new FormGroup ({
      'nombre': new FormControl('',Validators.required),
      'bio': new FormControl('', Validators.required),
      'casa': new FormControl('Marvel', Validators.required),
      'key': new FormControl()
    })

    this.activatedRoute.params.subscribe( params =>{
      console.log(params);
      this.id = params['id'];
      if( this.id !== "nuevo"){
        this._heroesServices.getHeroe( this.id ).subscribe( data => {
          console.log(data);
          this.heroe = data;
          this.forma.controls.nombre.setValue( data.nombre );
          this.forma.controls.casa.setValue( data.casa );
          this.forma.controls.bio.setValue( data.bio );
        })
      }
    })



   }

  ngOnInit() {
  }

  guardarCambios(){
    // Guardar los datos del forma al heroe
    this.heroe.nombre = this.forma.controls.nombre.value;
    this.heroe.bio = this.forma.controls.bio.value;
    this.heroe.casa = this.forma.controls.casa.value;

    if( this.id == "nuevo"){
      this._heroesServices.nuevoHeroe( this.heroe ).subscribe(
        data=>{
          this.router.navigate(['/heroe',data.name]);
        },
        error => {
          console.error(error);
        });
    }
    else{
      this._heroesServices.actualizarHeroe( this.heroe, this.id ).subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.error(error);
        }
      );
    }
  }

  agregarNuevo(forma:FormGroup){
    this.router.navigate(['/heroe','nuevo']);
    forma.reset({
      casa:"Marvel"
    });

    // Limpiar heroe para evitar confusiones
    this.heroe.nombre = this.forma.controls.nombre.value;
    this.heroe.bio = this.forma.controls.bio.value;
    this.heroe.casa = this.forma.controls.casa.value;
  }

}
