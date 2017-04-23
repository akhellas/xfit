import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ProductsService } from './products.service';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const productsRoutes: Routes = [
  { path: 'products', component: ProductsListComponent },
  { path: 'products/:id', component: ProductDetailsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(productsRoutes)
  ],
  declarations: [
    ProductsListComponent,
    ProductDetailsComponent
  ],
  providers: [ProductsService]
})
export class ProductsModule { }
