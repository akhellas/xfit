import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { CustomersService } from './customers.service';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerPageComponent } from './customer-page/customer-page.component';
import { CustomerActivityComponent } from './customer-activity/customer-activity.component';

const customersRoutes: Routes = [
  { path: 'customers', component: CustomersListComponent },
  { path: 'customers/new', component: CustomerPageComponent, data: [{ isNew: true }] },
  { path: 'customers/edit/:id', component: CustomerPageComponent, data: [{ isNew: false }] }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(customersRoutes)
  ],
  declarations: [
    CustomersListComponent,
    CustomerDetailsComponent,
    CustomerPageComponent
  
  ],
  providers: [CustomersService]
})
export class CustomersModule { }