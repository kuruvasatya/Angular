import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  constructor() { }
  user:any;
  display:boolean = false;
  getData(data:NgForm) {
    this.display = true;
    this.user = data;
  }

  ngOnInit(): void {
  }

}
