import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  constructor() { }
  userData:any = null;
  display = false;
  getdata(data:NgForm) {
    this.userData = data;
    this.display = true;
  }
  ngOnInit(): void {
  }

}
