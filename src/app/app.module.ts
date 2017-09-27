import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SideMenuBarComponent } from './side-menu-bar/side-menu-bar.component';
import { HeaderComponent } from './header/header.component';
import { MainWindowComponent } from './main-window/main-window.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SalesComponent } from './main-window/sales/sales.component';
import { ReportComponent } from './main-window/report/report.component';
import { TasksComponent } from './main-window/tasks/tasks.component';
import { MessagesComponent } from './main-window/messages/messages.component';
import { ActivityComponent } from './main-window/activity/activity.component';
import {DataServiceService} from "./data-service.service";

@NgModule({
  declarations: [
    AppComponent,
    SideMenuBarComponent,
    HeaderComponent,
    MainWindowComponent,
    SalesComponent,
    ReportComponent,
    TasksComponent,
    MessagesComponent,
    ActivityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
