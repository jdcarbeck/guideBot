import { Component, AfterViewChecked, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatpage',
  templateUrl: './chatpage.component.html',
  styleUrls: ['./chatpage.component.css']
})
export class ChatpageComponent implements OnInit, AfterViewChecked {

  messageLog = [];

  constructor() { }

  ngOnInit() {
    let defaultMessage = {} as Message;
    defaultMessage.sender = 'bot';
    defaultMessage.content = 'Hello I am a chat bot powered by IBM Watson, How can I help you?'; 
    this.messageLog.push(defaultMessage);
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
    }
  }
}

export interface Message{
  sender:string;
  content:string;
}
