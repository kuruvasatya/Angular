import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'love',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component implements OnInit {
  color: string = "#ccc"
  @Input() isLiked: any;
  @Input() likeCount: any;
  constructor() { }
  ngOnInit(): void {
  }

  onClick() {
    this.isLiked = !this.isLiked;
    this.color = this.isLiked? "deeppink" : "#ccc";
    this.likeCount = this.isLiked? this.likeCount + 1 : this.likeCount - 1;
  }

}
