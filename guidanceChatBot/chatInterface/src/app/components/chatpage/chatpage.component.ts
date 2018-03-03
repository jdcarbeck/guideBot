import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-chatpage',
  templateUrl: './chatpage.component.html',
  styleUrls: ['./chatpage.component.css']
})
export class ChatpageComponent implements OnInit {
  
  messages:string[]; 
  
  constructor() { }

  ngOnInit() {
  }
  
  messageSend(userMessage: string) {
    this.messages.push(userMessage);
    //send message to server here!
    return 0;
  }

}


