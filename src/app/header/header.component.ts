import {Component, OnInit, Output} from '@angular/core';
import {DataServiceService} from '../data-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuState: string;
  size;
  constructor(private service: DataServiceService) { }

  ngOnInit() {
  }

  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
    this.service.menuStatus.next(this.menuState);
    if (this.menuState === 'in') {
      this.size = '0px';
    } else {
      this.size = '200px';
    }
  }

}
