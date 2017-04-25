import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { FormsModule } from '@angular/forms';

import { PackagesService } from './packages.service';
import { PackageDetailsComponent } from './package-details/package-details.component';

const packagesRoutes: Routes = [
 

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(packagesRoutes)
  ],
  declarations: [
    PackageDetailsComponent
  ],
  exports: [
    PackageDetailsComponent
  ],
  providers: [PackagesService]
})
export class PackagesModule { }