import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SocketService} from '../services/socket.services'
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

userChat={
  user:'',
  text:''
}

misMensajes;
eventName="enviarMensaje";

  constructor(private activated: ActivatedRoute, private sockService: SocketService) { 

  }

  ngOnInit(): void {
    const id = this.activated.snapshot.params.id;
    this.userChat.user=id;

    this.sockService.listen("MensajeEvento").subscribe((data) =>{
      this.misMensajes=data;
    })
  }

  miMensaje() {
    this.sockService.emit(this.eventName, this.userChat);
    this.userChat.text=""

  }

}
