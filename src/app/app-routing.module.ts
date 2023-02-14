import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { DistrictComponent } from './pages/district/district.component';
import { SinglecomponentComponent } from './pages/district/singlecomponent/singlecomponent.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [{
  path:'home',component:HomeComponent
  },
  {
    path:'district',component:DistrictComponent
  },
  {
    path:'contactus',component:ContactusComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'single',component:SinglecomponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
