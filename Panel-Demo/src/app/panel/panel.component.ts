import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {
  @Input() title:string="";
  clicked:boolean = false;

toggle() {
    this.clicked = !this.clicked; 
  }

}
