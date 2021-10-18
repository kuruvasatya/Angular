import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  constructor() { }
  display:boolean=false;
  username:string="";
  password:string="";
  loginForm = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(''),
  })

  getData() {
    this.display=true;
  }
  get user() {
    return this.loginForm.get('user');
  }
  ngOnInit(): void {
  }

}
