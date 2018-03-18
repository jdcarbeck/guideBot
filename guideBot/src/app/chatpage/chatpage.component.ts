import { Component, AfterViewChecked, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-chatpage',
  templateUrl: './chatpage.component.html',
  styleUrls: ['./chatpage.component.css']
})
 
export class ChatpageComponent implements OnInit, AfterViewChecked {

  messageLog = [];
  private socket;
  message;
  connection; 

  constructor() { }

  ngOnInit() {
    this.socket = io(); 
    this.connection = this.getMessage().subscribe(message => {
      let newMessage = {} as Message;
      newMessage.sender = 'bot';
      newMessage.content = String(message);
      this.messageLog.push(newMessage);
    })
  }

  ngAfterViewChecked() {
    var logObj = document.getElementById("chatlog");
    logObj.scrollTop = logObj.scrollHeight;
  }
   
  messageSend(userMessage: string) {
    if(userMessage) {
      let newMessage = {} as Message;
      newMessage.sender = 'user';
      newMessage.content = userMessage;
      this.messageLog.push(newMessage);
      this.socket.emit('message', newMessage.content);
    }
  }

  getMessage() {
  let observable = new Observable(observer =>{
      this.socket.on('message', (data) => {
        observer.next(data);  
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }
  
}

export interface Message{
  sender:string;
  content:string;
}
