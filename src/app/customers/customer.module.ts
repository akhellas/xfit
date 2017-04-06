import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { CustomersService } from './customers.service';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

const customersRoutes: Routes = [
  { path: 'customers', component: CustomersListComponent },
  { path: 'customers/:id', component: CustomerDetailsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(customersRoutes) 
  ],
  declarations: [
    CustomersListComponent, 
    CustomerDetailsComponent
  ],
  providers: [ CustomersService ]
})
export class CustomersModule { }
