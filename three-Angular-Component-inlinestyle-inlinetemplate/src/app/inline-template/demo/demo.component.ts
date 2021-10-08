import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  template: `
    <h1> Inline template works <h1>
  `,
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
