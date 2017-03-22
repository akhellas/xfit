import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';

import { CompaniesModule } from './companies/companies.module';
import { ProductsModule } from './products/products.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const firebaseConfig = {
  apiKey: "AIzaSyD9M8PpjwCDUtbLh3qwE_RqJEScZeRet-I",
  authDomain: "xfit-b727f.firebaseapp.com",
  databaseURL: "https://xfit-b727f.firebaseio.com",
  storageBucket: "xfit-b727f.appspot.com",
  messagingSenderId: "903412146842"
};

const appRoutes: Routes = [
    //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '', component: DashboardComponent },
    { path: '**', component: PageNotFoundComponent }
];

export const company: string = '-KfrhqG4_zYW7b5f8vvU';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CompaniesModule,
    ProductsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    PageNotFoundComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
