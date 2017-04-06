import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { CustomersService } from '../customers.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  items: Observable<any>;

  constructor(
    private router: Router,
    private service: CustomersService
  ) { }

  ngOnInit() {
    this.items = this.service.items;
  }

  onInsert() {
    let customer = new Customer();
    customer.name = 'New Customer';

    this.service.insert(customer);
  }

  onEdit(item: any) {
    this.router.navigate(['customers', item.$key]);
  }
  
  onDelete(item: any) {
    this.service.remove(item);
  }
}
