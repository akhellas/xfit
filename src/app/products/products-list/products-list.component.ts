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

  onInsert() {
    let product = new Product();
    product.name = "Νέο";
    product.duration = 1;
    product.price = 50;
    product.isPerVisit = false;
    product.isActive = false;

    this.service.insert(product);
  }

  onEdit(item: any) {
    this.router.navigate(['products', item.$key]);
  }

  onDelete(item: any) {
    this.service.remove(item);
  }
}
