import { Injectable } from '@angular/core';
import * as io from 'socket.io-client'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })

export class SocketService {
    socket: any;
    server = "http://localhost:3000"
    //constructor(private http: HttpClient) { }
    constructor () {
        this.socket= io.io(this.server)        
    }

    listen(eventName: String){
        return new Observable((Subscriber) => {
            this.socket.on(eventName, (data) => {
                Subscriber.next(data);
            })
        })
    }

    emit(eventName: String, data: any) {
        this.socket.emit(eventName, data);
    }
}