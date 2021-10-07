import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // property of app component
  title = 'one-Angular-beggining';
  myName = "Satya";

  showWelcomeMessage() {
    return "Welcome ";
  }
}
