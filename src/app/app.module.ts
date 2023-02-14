import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DistrictComponent } from './pages/district/district.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { NavbarComponent } from './utiles/navbar/navbar.component';
import { FooterComponent } from './utiles/footer/footer.component';
import { SinglecomponentComponent } from './pages/district/singlecomponent/singlecomponent.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DistrictComponent,
    SignupComponent,
    ContactusComponent,
    NavbarComponent,
    FooterComponent,
    SinglecomponentComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
