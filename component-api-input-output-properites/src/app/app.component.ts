import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-api-input-output-properites';
  post = {
     title : "post",
     isFavourite : true
  }

  favOnChange(isSelected : boolean) {
    console.log("Event is called : " + isSelected);
  }
}
