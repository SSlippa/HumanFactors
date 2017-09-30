import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../task.model';
import * as moment from 'moment';
import {DataServiceService} from '../../../data-service.service';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.css']
})
export class SingleTaskComponent implements OnInit {
  @Input() task: Task;
  nowDate;
  taskDate;
  days;
  daysLeftORDelays;
  constructor(private service: DataServiceService) { }

  ngOnInit() {
    this.nowDate = Date.now();
    this.taskDate = this.task.lastUpdate;
    let now = moment(Date.now() ); // todays date
    let task = moment(this.taskDate); // task date
    let duration = moment.duration(task.diff(now));
    this.days = Math.trunc(duration.asDays());
    if ( this.days < 0) {
      this.daysLeftORDelays = 'delays';
    } else {
      this.daysLeftORDelays = 'left';
    }
  }

  dateDiff () {

    // this.diff = Date.now() - +(this.taskDate);
    // this.diff.getHours();
  }

}
