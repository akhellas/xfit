import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Product } from './../product';

import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.sass']
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


  onEdit(item: any) {
    this.router.navigate(['products/edit', item.$key]);
  }

  onDelete(item: any) {
    this.service.remove(item);
  }

   onInsert() {
    this.router.navigate(['products/new']);
  }
  onCancel(){
     this.router.navigate(['products']);
  }

 
}
