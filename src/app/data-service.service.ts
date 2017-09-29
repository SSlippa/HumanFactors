import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import { Task} from './main-window/tasks/task.model';

@Injectable()
export class DataServiceService {
  menuStatus = new Subject<string>();
  tasksChanged = new Subject<Task[]>();
  redMessage;
  public tasks: Task[] = [
    new Task('N', 'New Website for Symu.com', new Date(2017, 8, 27)),
    new Task('F', 'Free Business PSD Template', new Date(2017, 8, 25)),
    new Task('N', 'New logo for   JCD', new Date(2017, 9, 2)),
    new Task('F', 'Free icons Set vol.3', new Date(2017, 9, 3))
  ];

  constructor() {}

  getTasks() {
    return this.tasks.slice();
  }

  getRedMessages() {
    return this.redMessage;
  }

}
