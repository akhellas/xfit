import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.sass']
})
export class CustomerPageComponent implements OnInit {
  isNew: boolean;

  constructor(route: ActivatedRoute) {
    this.isNew = route.snapshot.data[0]['isNew'];
  }

  ngOnInit() {

  }


}
