import { Component, OnInit } from '@angular/core';
import {Message} from './message.model';
import {DataServiceService} from '../../data-service.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: Message[];
  constructor(private service: DataServiceService) { }

  ngOnInit() {
    this.messages = this.service.getMessages();
    this.service.messagesChanged.subscribe(
      (messages: Message[]) => {
        this.messages = messages;
      }
    );
  }

}
