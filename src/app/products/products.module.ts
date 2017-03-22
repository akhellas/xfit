import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProductsService } from '../products/products.service';

import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const productsRoutes: Routes = [
  { path: 'products', component: ProductsListComponent },
  { path: 'products/:id', component: ProductDetailsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(productsRoutes) 
  ],
  declarations: [
    ProductsListComponent, 
    ProductDetailsComponent
  ],
  providers: [ ProductsService ],
})
export class ProductsModule { }
