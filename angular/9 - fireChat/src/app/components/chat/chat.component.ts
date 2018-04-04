import { Component } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent {

  mensaje:string = "";

  constructor(public _chatService:ChatService) {
    this._chatService.cargarMensajes().subscribe();
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
