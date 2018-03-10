import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-chatpage',
  templateUrl: './chatpage.component.html',
  styleUrls: ['./chatpage.component.css']
})
export class ChatpageComponent implements OnInit {

  messageLog = [];

  constructor() { }

  ngOnInit() {
    let defaultMessage = {} as Message;
    defaultMessage.sender = 'bot';
    defaultMessage.content = 'Hello I am a chat bot powered by IBM Watson, How can I help you?'; 
    this.messageLog.push(defaultMessage);
  }
   
  messageSend(userMessage: string) {
    if(userMessage) {
      let newMessage = {} as Message;
      newMessage.sender = 'user';
      newMessage.content = userMessage;
      this.messageLog.push(newMessage);    
      //send message to server here!
    }
  }

}

export interface Message{
  sender:string;
  content:string;
}
