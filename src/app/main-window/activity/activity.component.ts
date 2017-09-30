import { Component, OnInit } from '@angular/core';
import {Activity} from './activity.model';
import {DataServiceService} from '../../data-service.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  activities: Activity[];

  constructor(private service: DataServiceService) { }

  ngOnInit() {
    this.activities = this.service.getActivities();
    this.service.tasksChanged.subscribe(
      (activities: Activity[]) => {
        this.activities = activities;
      }
    );
  }

}
