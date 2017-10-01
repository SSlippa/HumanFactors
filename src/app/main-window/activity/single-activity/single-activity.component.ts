import {Component, Input, OnInit} from '@angular/core';
import {Activity} from '../activity.model';
import {DataServiceService} from '../../../data-service.service';
import * as moment from 'moment';

@Component({
  selector: 'app-single-activity',
  templateUrl: './single-activity.component.html',
  styleUrls: ['./single-activity.component.css']
})
export class SingleActivityComponent implements OnInit {
  @Input() activity: Activity;
  @Input() index;
  nowDate;
  taskDate;
  days;
  addToNumberMessage;
  constructor(private service: DataServiceService) { }

  ngOnInit() {
    this.nowDate = Date.now();
    this.taskDate = this.activity.lastUpdate;
    let now = moment(Date.now() ); // todays date
    let task = moment(this.taskDate); // task date
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
