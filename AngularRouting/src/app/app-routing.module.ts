import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './basic/about/about.component';
import { ContactComponent } from './basic/contact/contact.component';
import { HomeComponent } from './basic/home/home.component';
import { DhomeComponent } from './dynamic/dhome/dhome.component';
import { DaboutComponent } from './dynamic/dabout/dabout.component';
import { UserComponent } from './dynamic/user/user.component';

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
  },
  {
    component:DaboutComponent,
    path:"dabout"
  },
  {
    component:DhomeComponent,
    path:"dhome"
  },
  {
    component:UserComponent,
    path:"user/:id"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
