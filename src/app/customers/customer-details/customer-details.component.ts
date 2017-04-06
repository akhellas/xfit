import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { CustomersService } from '../customers.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  item: Observable<any> = new Observable<any>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CustomersService
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
