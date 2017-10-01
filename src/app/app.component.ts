import {Component, Input} from '@angular/core';
import { trigger, state, style, transition, animate} from '@angular/animations';
import {DataServiceService} from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(-100%, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class AppComponent {
   menuState:string = 'in';

   constructor(private service: DataServiceService) {
     service.menuStatus.subscribe(
       (status: string) => {
         this.menuState = status;
       }
     );
   }


}
