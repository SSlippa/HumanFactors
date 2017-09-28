import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../data-service.service';

@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.css']
})
export class MainWindowComponent implements OnInit {
  user = 'Barak';
  size;
  menuState;
  constructor(private service: DataServiceService) {
    service.menuStatus.subscribe(
      (status: string) => {
        this.menuState = status;
        if (this.menuState === 'in') {
          this.size = '0px';
        } else {
          this.size = '200px';
        }
      }
    );
  }

  ngOnInit() {
  }

}
