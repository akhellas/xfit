import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { CompaniesService } from './companies.service';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';

const companiesRoutes: Routes = [
  { path: 'companies', component: CompaniesListComponent },
  { path: 'companies/:id', component: CompanyDetailsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(companiesRoutes) 
  ],
  declarations: [
    CompaniesListComponent, 
    CompanyDetailsComponent
  ],
  providers: [ CompaniesService ]
})
export class CompaniesModule { }
