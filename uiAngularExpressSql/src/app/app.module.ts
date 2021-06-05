import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { AddPersonComponent } from './component/add-person/add-person.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { LoginComponent } from './component/login/login.component';
import { PersonComponent } from './component/person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AddPersonComponent,
    LoginComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
