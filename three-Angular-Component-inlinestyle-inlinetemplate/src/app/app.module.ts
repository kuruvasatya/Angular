import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InlineStyleModule } from './inline-style/inline-style.module';
import { InlineTemplateModule } from './inline-template/inline-template.module';
import { InlineStyleTemplateModule } from './inline-style-template/inline-style-template.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InlineStyleModule,
    InlineTemplateModule,
    InlineStyleTemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
