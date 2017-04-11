import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UtilitesService } from '../../common/utilities.service';
import 'rxjs/add/operator/switchMap';

import { CustomersService } from '../customers.service';
import { Customer, Address, ContactInfo, ContactTypes } from '../customer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.sass']
})
export class CustomerDetailsComponent implements OnInit {
  item: Customer = new Customer();
  contactTypes: any[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CustomersService
  ) { }

  ngOnInit() {
    this.contactTypes = UtilitesService.convertNamesAndValues(ContactTypes);
    this.route.params
      .switchMap((params: Params) => this.service.item(params['id']))
      .subscribe((item: any) => this.item = item);
    if (this.item.address == undefined)
      this.item.address = new Address();
    if (this.item.contactInfo == undefined)
      this.item.contactInfo = new ContactInfo();
  }

  save() {
    this.service.update(this.item);
  }
  cancel() {
    this.router.navigateByUrl('/customers');
  }
}
