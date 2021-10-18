import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './basic/about/about.component';
import { ContactComponent } from './basic/contact/contact.component';
import { HomeComponent } from './basic/home/home.component';

const routes: Routes = [
  {
    component:AboutComponent,
    path:"about"
  },
  {
    component:ContactComponent,
    path:"contact"
  },
  {
    component:HomeComponent,
    path:""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
