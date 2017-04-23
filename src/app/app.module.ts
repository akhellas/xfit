import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { ToastModule } from 'ng2-toastr';

import { CompaniesModule } from './companies/companies.module';
import { CustomersModule } from './customers/customer.module';
import { ProductModule } from './products/product.module';
import { PackageModule } from './packages/package.module';


import { ToastService } from './toast.service';
import { UtilitesService } from './common/utilities.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';


export const firebaseConfig = {
  apiKey: "AIzaSyD9M8PpjwCDUtbLh3qwE_RqJEScZeRet-I",
  authDomain: "xfit-b727f.firebaseapp.com",
  databaseURL: "https://xfit-b727f.firebaseio.com",
  storageBucket: "xfit-b727f.appspot.com",
  messagingSenderId: "903412146842"
};

export const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const company: string = '-Kfrps-nEI3ccNOS9eeI';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    PackageModule,
    CompaniesModule,
    CustomersModule,
    ProductModule,
    
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    RouterModule.forRoot(appRoutes),
    ToastModule.forRoot()
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    PageNotFoundComponent,
    AboutComponent

  ],
  providers: [ToastService, UtilitesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
