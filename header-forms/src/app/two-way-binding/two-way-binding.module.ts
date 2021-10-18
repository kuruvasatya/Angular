import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Demo2Component } from './demo2/demo2.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Demo2Component
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    Demo2Component
  ]
})
export class TwoWayBindingModule { }
