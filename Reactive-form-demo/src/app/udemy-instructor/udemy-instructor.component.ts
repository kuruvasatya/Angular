import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormArray, AbstractControl } from '@angular/forms';

@Component({
  selector: 'instructor',
  templateUrl: './udemy-instructor.component.html',
  styleUrls: ['./udemy-instructor.component.css']
})
export class UdemyInstructorComponent {

form = new FormGroup({
  'name': new FormControl("", Validators.required),
  'contact': new FormGroup({
    'email': new FormControl('',Validators.pattern('[a-z0-9.]+@gmail.com')),
    'phone': new FormControl('', [Validators.minLength(10), Validators.maxLength(10), Validators.pattern("[0-9]+")])
    }),
  'subjects': new FormArray([])
});  

get name(){
  return this.form.get('name')!;
}

get email() {
  return this.form.get('contact.email')!;
}

get phone() {
  return this.form.get('contact.phone')!;
}

get subjects() {
  return this.form.get('subjects')! as FormArray;
}

addTopic(subject: HTMLInputElement){
  this.subjects.push(new FormControl(subject.value));
  subject.value="";
}

removeTopic(subject:AbstractControl) {
  let index= this.subjects.controls.indexOf(subject);
  this.subjects.removeAt(index);
}
}
