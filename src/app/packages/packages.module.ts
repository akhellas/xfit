import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PackagesService } from './packages.service';

import { PackagesListComponent } from './packages-list/packages-list.component';
import { PackageDetailsComponent } from './package-details/package-details.component';

const packagesRoutes: Routes = [
  { path: 'packages', component: PackagesListComponent },
  { path: 'packages/:id', component: PackageDetailsComponent }
];

@NgModule({
  imports: [ 
    CommonModule,
    RouterModule.forChild(packagesRoutes) 
  ],
  declarations: [ 
    PackagesListComponent, 
    PackageDetailsComponent
  ],
  providers: [ PackagesService ],
})
export class PackagesModule { }