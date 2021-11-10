import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicModule } from './basic/basic.module';
import { DynamicModule } from './dynamic/dynamic.module';

import { ChildRouterModule } from './child-router/child-router.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BasicModule,
    DynamicModule,
    ChildRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
