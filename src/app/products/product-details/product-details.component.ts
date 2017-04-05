import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  item: Observable<any> = new Observable<any>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductsService
  ) { }

  ngOnInit() {
    this.route.params
              .switchMap((params: Params) => this.service.item(params['id']))
              .subscribe((item: any) => this.item = item);
  }

  save() {
    this.service.update(this.item);
  }
}
