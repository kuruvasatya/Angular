import { Component, OnInit, Input, Output ,EventEmitter } from '@angular/core';


@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  @Input() isSelected : any;
  @Output() change = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.isSelected = !this.isSelected;
    this.change.emit(this.isSelected);
  }

}
