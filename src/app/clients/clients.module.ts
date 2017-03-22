import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ClientsService } from './clients.service';

import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientDetailsComponent } from './client-details/client-details.component';

const clientsRoutes: Routes = [
  { path: 'clients', component: ClientsListComponent },
  { path: 'clients/:id', component: ClientDetailsComponent }
];

@NgModule({
  imports: [ 
    CommonModule,
    RouterModule.forChild(clientsRoutes) 
  ],
  declarations: [ 
    ClientsListComponent, 
    ClientDetailsComponent
  ],
  providers: [ ClientsService ],
})
export class ClientsModule { }
