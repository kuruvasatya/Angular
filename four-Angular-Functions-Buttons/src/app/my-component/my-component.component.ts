import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  count = 0;
  constructor() { }

  ngOnInit(): void {
  }

  getName(name:string){
    alert("hello "  + name)
  }

  getCost(cost:number){
    alert("your expence " + cost);
  }

  getId(id:string|number){
    alert("your id is " + id);
  }

  getData(data: any) {
    alert("data " + data);
  }

  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
}
