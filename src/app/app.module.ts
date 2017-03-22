import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';

import { AppRoutingModule } from './app-routing.module';

import { ClientsService } from './clients/clients.service';
import { PackagesService } from './packages/packages.service';

import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { PackagesComponent } from './packages/packages.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const firebaseConfig = {
  apiKey: "AIzaSyD9M8PpjwCDUtbLh3qwE_RqJEScZeRet-I",
  authDomain: "xfit-b727f.firebaseapp.com",
  databaseURL: "https://xfit-b727f.firebaseio.com",
  storageBucket: "xfit-b727f.appspot.com",
  messagingSenderId: "903412146842"
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ClientsComponent,
    PackagesComponent,
    PageNotFoundComponent
  ],
  providers: [
    ClientsService, 
    PackagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
