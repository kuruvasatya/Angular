import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConditionalStmntsModule } from './conditional-stmnts/conditional-stmnts.module';
import { LoopsModule } from './loops/loops.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ConditionalStmntsModule,
    LoopsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
