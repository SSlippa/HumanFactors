import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu-bar',
  templateUrl: './side-menu-bar.component.html',
  styleUrls: ['./side-menu-bar.component.css']
})
export class SideMenuBarComponent implements OnInit {
  mennuList = ['Home', 'WorkFlow', 'Statistics', 'Calendar', 'Users', 'Settings'];

  constructor() { }

  ngOnInit() {
  }

}
