import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { FormsModule } from '@angular/forms';
import { Task3Component } from './task3/task3.component';
import { Task4Component } from './task4/task4.component';

@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    Task2Component,
    Task3Component,
    Task4Component
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
