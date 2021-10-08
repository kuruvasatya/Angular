import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo2',
  template: `
    <h1 class="custom">
      Inline style template  works!
    </h1>
  `,
  styles: [
    `.custom{
      color:red;
    }`
  ]
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
