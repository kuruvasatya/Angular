import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppInputDirective } from './app-input.directive';
import { EmailDirective } from './email.directive';

@NgModule({
  declarations: [
    AppComponent,
    AppInputDirective,
    EmailDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
