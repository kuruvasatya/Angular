import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersValidators } from './user.validators';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  form = new FormGroup({
    'username': new FormControl('', [Validators.required,
                                      Validators.minLength(3),
                                      Validators.pattern("[a-z]+@gmail.com"),
                                      UsersValidators.canNotContainSpace]),
    'password': new FormControl('', Validators.required)
  });

  get username() {
    return this.form.get('username');
  }  
  
  get password() {
    return this.form.get('password');
  }
}
