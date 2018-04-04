import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {

  mensaje:string = "";
  elemento:any;

  constructor(public _chatService:ChatService) {
    this._chatService.cargarMensajes().subscribe( ()=>{

      setTimeout( ()=>{
        this.elemento.scrollTop = this.elemento.scrollHeight;
      },20);
    });
  }

  ngOnInit(){
    this.elemento = document.getElementById("app-mensajes");

  }

  enviar_mensaje(){
    if(this.mensaje.length > 0){
      this._chatService.agregarMensajes( this.mensaje )
        .then( ()=> {
          console.log("Mensaje Enviado Correctamente.");
          this.mensaje = "";
        })
        .catch( (err)=> console.error("Mensaje no fue enviado.", err));
    }
  }

}
