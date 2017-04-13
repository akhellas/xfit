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
  item: any = new Customer();
  contactTypes: any[];
  paramsID: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CustomersService
  ) { }

  ngOnInit() {
    this.contactTypes = UtilitesService.convertNamesAndValues(ContactTypes);

    this.route.params.subscribe((params) => {
      this.paramsID = params["id"];
      if (this.paramsID == undefined || !this.paramsID) {

        return;
      }
      this.service.item(this.paramsID).subscribe((item) => {
        this.item = item;
      });
    });
  }



  save() {
    this.paramsID ? this.service.update(this.item) : this.service.insert(this.item);
  }
  cancel() {
    this.router.navigateByUrl('/customers');
  }
}
