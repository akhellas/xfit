import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { ProductsService } from '../products.service';
import { CompaniesService } from '../../companies/companies.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.sass']
})
export class ProductDetailsComponent implements OnInit {
  product: any = new Product();
  isNew: boolean;
  companyItems: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductsService,
    private companyService: CompaniesService
  ) {
    this.isNew = route.snapshot.data[0]['isNew'];
  }

  ngOnInit() {
    this.companyItems = this.companyService.items;
    if (!this.isNew) {
      this.route.params.subscribe(params => {
        this.service.item(params["id"]).subscribe(item => {
          this.product = item;
        });
      });
    }
  }

  save() {
    if (this.isNew) {
      this.service.insert(this.product);
      this.router.navigateByUrl('/products');
      return;
    }
    this.service.update(this.product);
  }

  cancel() {
    this.router.navigate(['products']);
  }
}
