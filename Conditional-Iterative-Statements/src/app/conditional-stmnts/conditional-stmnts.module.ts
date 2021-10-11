import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Example1Component } from './example1/example1.component';



@NgModule({
  declarations: [
    Example1Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Example1Component
  ]
})
export class ConditionalStmntsModule { }
