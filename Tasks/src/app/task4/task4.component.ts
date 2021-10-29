import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.css']
})
export class Task4Component {

 @Input('title') title : string = "";

 isExpanded : boolean = false;

 toggle() {
   console.log("I am click event");
   this.isExpanded = !this.isExpanded;
 }

}
