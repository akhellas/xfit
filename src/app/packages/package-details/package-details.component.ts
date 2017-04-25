import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Package } from './../package';
import { Product } from '../../products/product';

import { PackagesService } from '../packages.service';
import { ProductsService } from '../../products/products.service';


@Component({
  selector: 'package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.sass']
})
export class PackageDetailsComponent implements OnInit {

  package: Package = new Package();
  items: Observable<any>;
  products: any;
  product: Product;


  constructor(
    private service: PackagesService,
    private productService: ProductsService
  ) { }

  ngOnInit() {
    this.products = this.productService.items;
  }
  
  createPackage() {
    console.log(this.product.name);
  }
}
