import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.css']
})
export class Example2Component implements OnInit {

  users = [
    {name: "satya", email: "asaty@io.com", phone: [9120113376, 9100410600]},
    {name: "ganesh", email: "asaty@io.com", phone: [9120113376, 9100410600]},
    {name: "ramesh", email: "asaty@io.com", phone: [9120113376, 9100410600]},
    {name: "suresh", email: "asaty@io.com", phone: [9120113376, 9100410600]}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
