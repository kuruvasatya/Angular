import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DhomeComponent } from './dhome/dhome.component';
import { DaboutComponent } from './dabout/dabout.component';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [
    DhomeComponent,
    DaboutComponent,
    UserComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DaboutComponent,
    DhomeComponent,
    UserComponent
  ]
})
export class DynamicModule { }
