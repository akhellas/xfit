import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: Observable<any>;
  
  constructor(
    private router: Router,
    private service: ProductsService
  ) { }

  ngOnInit() {
    this.products = this.service.products;
  }

  onInsert() {
    this.service.insert();
  }

  onEdit(product: any) {
    this.router.navigate(['/products', product.$key]);
  }
  
  onDelete(product: any) {
    this.service.remove(product);
  }
}
