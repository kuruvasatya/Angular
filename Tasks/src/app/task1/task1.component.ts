import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {
  isFav: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
   this.isFav = !this.isFav;
  }

}
