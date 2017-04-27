import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Package } from './../package';
import { Product } from '../../products/product';

import { PackagesService } from '../packages.service';
import { UtilitesService } from '../../common/utilities.service';
import { ToastService } from '../../toast.service';
import { ProductsService } from '../../products/products.service';


@Component({
  selector: 'package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.sass']
})
export class PackageDetailsComponent implements OnInit {
  @Output() onInsert = new EventEmitter<boolean>()
  package: Package = new Package();
  items: Observable<any>;
  products: any;
  product: Product;

  constructor(
    private service: PackagesService,
    private productService: ProductsService,
    private toastService: ToastService,
    private utilities: UtilitesService
  ) { }

  ngOnInit() {
    this.products = this.productService.items;
  }

  onChange() {

    this.package.CustomerId = "-KhheYvU4BRZ529-9awU";
    this.package.ProductDuration = this.product.duration;
    this.package.ProductIsPerVisit = this.product.isPerVisit;
    this.package.ProductName = this.product.name;
    this.package.ProductPrice = this.product.price;
    if (this.product) {
      var endDate = this.utilities.addMonths(this.package.Starts, this.product.duration)
      this.package.Ends = this.utilities.formatDate(endDate);
    }

  }

  insert() {
    if (this.product && this.package.Starts) {
      this.service.insert(this.package);
      this.onInsert.emit(true);

    } else {
      this.toastService.info("Συμπληρώστε Πακέτο και Έναρξη");
    }
  }

}
