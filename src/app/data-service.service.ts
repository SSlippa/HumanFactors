import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import { Task} from './main-window/tasks/task.model';
import {Message} from './main-window/messages/message.model';
import {Activity} from './main-window/activity/activity.model';

@Injectable()
export class DataServiceService {
  menuStatus = new Subject<string>();
  tasksChanged = new Subject<Task[]>();
  messagesChanged = new Subject<Message[]>();
  activityChanged = new Subject<Activity[]>();
  redMessage;
  public tasks: Task[] = [
    new Task('N', 'New Website for Symu.com', new Date(2017, 8, 27)),
    new Task('F', 'Free Business PSD Template', new Date(2017, 8, 25)),
    new Task('N', 'New logo for   JCD', new Date(2017, 9, 2)),
    new Task('F', 'Free icons Set vol.3', new Date(2017, 9, 3))
  ];

  public messages: Message[] = [
    new Message('N', 'Nina Jones', 'Hey You! It`s me again :-) I attached new !!!', new Date()),
    new Message('F', 'Nina Jones', 'Hey!   I attached some new PSD files for !!!', new Date(2017, 8, 29)),
    new Message('N', 'James Smith', 'Good morning, you are fired', new Date(2017, 8, 28)),
    new Message('F', 'Nina Jones', 'Hello! Could You bring me coffee please', new Date(2017, 8, 27))
  ];

  public activities: Activity[] = [
    new Activity('N', 'Nina Jones', 'added a new project', 'Free UI kit', new Date()),
    new Activity('F', 'Nina Jones', 'commented project', 'Free PSD ', new Date(2017, 8, 29)),
    new Activity('N', 'James Smith', 'completed task',  'Symu Website', new Date(2017, 8, 28)),
    new Activity('F', 'Nina Jones', 'added a new project', 'Free PSD', new Date(2017, 8, 24))
  ];

  constructor() {}

  getTasks() {
    return this.tasks.slice();
  }
  getMessages() {
    return this.messages.slice();
  }
  getActivities() {
    return this.activities.slice();
  }

  getRedMessages() {
    return this.redMessage;
  }

}
