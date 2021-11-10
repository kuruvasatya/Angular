import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { FormsModule} from '@angular/forms'
import { BootstrapExampleModule } from './bootstrap-example/bootstrap-example.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TwoWayBindingModule } from './two-way-binding/two-way-binding.module';
import { FormsDemoModule } from './forms-demo/forms-demo.module';

@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BootstrapExampleModule,
    NgbModule,
    TwoWayBindingModule,
    FormsDemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
