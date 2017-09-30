import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../message.model';
import {DataServiceService} from '../../../data-service.service';
import * as moment from 'moment';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() message: Message;
  nowDate;
  // diff;
  messageDate;
  days;
  addToNumberMessage;

  constructor(private service: DataServiceService) { }

  ngOnInit() {
    this.nowDate = Date.now();
    this.messageDate = this.message.lastUpdate;
    // this.diff = this.taskDate - this.nowDate;
    let now = moment(Date.now() ); // todays date
    let task = moment(this.messageDate); // task date
    let duration = moment.duration(task.diff(now));
    this.days = Math.trunc(duration.asMinutes());
    this.days = Math.abs(this.days);
    if (this.days < 1) {
      this.addToNumberMessage = 'right now';
    }
    if (this.days > 1 && this.days < 60) {
      this.addToNumberMessage = 'minutes ago';
    }
    if (this.days > 60 && this.days < 1440) {
      this.addToNumberMessage = 'hours ago';
      this.days = this.days / 60;
      this.days = Math.trunc(this.days);
    }
    if (this.days > 1440 ) {
      this.addToNumberMessage = 'days ago';
      this.days = this.days / 60 / 24;
      this.days = Math.trunc(this.days);
    }


  }

}
