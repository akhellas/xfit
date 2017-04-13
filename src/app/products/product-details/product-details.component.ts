import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.sass']
})
export class ProductDetailsComponent implements OnInit {
  item: Observable<Product> = new Observable<Product>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductsService
  ) { }

  ngOnInit() {
    this.route.params
              .switchMap((params: Params) => this.service.item(params['id']))
              .subscribe((item) => this.item = item);
  }

  save() {
    this.service.update(this.item);
  }
}
