import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PackagesService } from './packages.service';
import { PackageDetailsComponent } from './package-details/package-details.component';

const packagesRoutes: Routes = [
  { path: 'packages', component: PackageDetailsComponent }

];

@NgModule({
  imports: [
    CommonModule,
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