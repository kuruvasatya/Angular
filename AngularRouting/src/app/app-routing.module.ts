import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './basic/about/about.component';
import { ContactComponent } from './basic/contact/contact.component';
import { HomeComponent } from './basic/home/home.component';
import { DhomeComponent } from './dynamic/dhome/dhome.component';
import { DaboutComponent } from './dynamic/dabout/dabout.component';
import { UserComponent } from './dynamic/user/user.component';
import { WelcomeComponent } from './child-router/welcome/welcome.component';
import { LocationComponent } from './child-router/location/location.component';
import { USAComponent } from './child-router/usa/usa.component';
import { IndiaComponent } from './child-router/india/india.component';
import { NoPageComponent } from './child-router/no-page/no-page.component';

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
  },
  {
    component:WelcomeComponent,
    path:"welcome"
  },
  {
    component:LocationComponent,
    path:'location',
    children: [
      { path:'USA', component: USAComponent},
      { path:'India', component: IndiaComponent}
    ]
  },
  {
    component: NoPageComponent,
    path:'**'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
