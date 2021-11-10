import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { LocationComponent } from './location/location.component';
import { IndiaComponent } from './india/india.component';
import { USAComponent } from './usa/usa.component';
import { NoPageComponent } from './no-page/no-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    WelcomeComponent,
    LocationComponent,
    IndiaComponent,
    USAComponent,
    NoPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    IndiaComponent,
    LocationComponent,
    NoPageComponent,
    USAComponent,
    WelcomeComponent
  ]
})
export class ChildRouterModule { }
