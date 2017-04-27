import { Component, OnInit, Input } from '@angular/core';
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
  customer: any = new Customer();
  temp: Customer = new Customer();
  contactTypes: any[];
  @Input() isNew: boolean;
  isEdit: boolean = false;
  edit: number = -1;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CustomersService
  ) { }

  ngOnInit() {
    this.contactTypes = UtilitesService.convertNamesAndValues(ContactTypes);
    if (!this.isNew) {
      this.route.params.subscribe(params => {
        this.service.item(params["id"]).subscribe(item => {
          this.customer = item;
        });
      });
    }
  }

  editMode(edit) {
    this.edit = edit;
    this.isEdit = true;
    this.temp = Object.assign(new Customer(), this.customer)
  }

  cancelEditMode() {
    if (this.isNew) {
      this.router.navigateByUrl('/customers');
      return;
    }
    this.edit = -1;
    this.isEdit = false;
    this.customer = this.temp;
  }

  save() {
    if (this.isNew) {
      this.service.insert(this.customer);
      this.router.navigateByUrl('/customers');
      return;
    }
    this.service.update(this.customer);
    this.isEdit = false;
    this.edit = -1;
  }

  cancel() {
    this.router.navigateByUrl('/customers');
  }
}
