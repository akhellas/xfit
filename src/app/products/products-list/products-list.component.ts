import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Product } from './../product';

import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  items: Observable<any>;

  constructor(
    private router: Router,
    private service: ProductsService
  ) { }

  ngOnInit() {
    this.items = this.service.items;
  }

  // test() {
  //   var newprod = new Product();
  //   newprod.description = "new";
  //   newprod.duration = 1;
  //   newprod.isPerVisit = false;
  //   newprod.status = false;
  //   newprod.price = 20;


  // }

  onInsert() {
    this.service.insert();
  }

  onEdit(item: any) {
    this.router.navigate(['products', item.$key]);
  }

  onDelete(item: any) {
    this.service.remove(item);
  }
}
