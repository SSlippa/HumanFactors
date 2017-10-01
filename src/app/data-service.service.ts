import {Injectable} from '@angular/core';
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
  redMessageChanged = new Subject<number>();
  redMess =  2;
  public tasks: Task[] = [
    new Task('N', 'New Website for Symu.com', new Date(2017, 8, 27)),
    new Task('F', 'Free Business PSD Template', new Date(2017, 8, 25)),
    new Task('N', 'New logo for   JCD', new Date(2017, 9, 7)),
    new Task('F', 'Free icons Set vol.3', new Date(2017, 9, 9))
  ];

  public messages: Message[] = [
    new Message('N', 'Nina Jones', 'Hey You! It`s me again :-) I attached new !!!', new Date()),
    new Message('N', 'Nina Jones', 'Hey!   I attached some new PSD files for !!!', new Date(2017, 8, 29)),
    new Message('J', 'James Smith', 'Good morning, you are fired', new Date(2017, 8, 28)),
    new Message('N', 'Nina Jones', 'Hello! Could You bring me coffee please', new Date(2017, 8, 27))
  ];

  public activities: Activity[] = [
    new Activity('N', 'Nina Jones', 'added a new project', 'Free UI kit', new Date()),
    new Activity('N', 'Nina Jones', 'commented project', 'Free PSD ', new Date(2017, 8, 29)),
    new Activity('J', 'James Smith', 'completed task',  'Symu Website', new Date(2017, 8, 28)),
    new Activity('N', 'Nina Jones', 'added a new project', 'Free PSD', new Date(2017, 8, 24))
  ];

  constructor() {
    this.redMessageChanged.subscribe(
      (num: number) => {
        this.redMess = this.redMess + num;
      }
    );
  }

  addTask(task: Task) {
    this.tasks.push(task);
    this.tasksChanged.next(this.tasks.slice());
  }

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
    return this.redMess;
  }

}
