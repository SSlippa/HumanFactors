import { Component, OnInit } from '@angular/core';
import {Task} from './task.model';
import {DataServiceService} from '../../data-service.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  redMessage;
  constructor(private service: DataServiceService) { }

  ngOnInit() {
    this.tasks = this.service.getTasks();
    this.service.tasksChanged.subscribe(
      (tasks: Task[]) => {
        this.tasks = tasks;
      }
    );
  }

}
