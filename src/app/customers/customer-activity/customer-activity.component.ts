import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-activity',
  templateUrl: './customer-activity.component.html',
  styleUrls: ['./customer-activity.component.sass']
})
export class CustomerActivityComponent implements OnInit {
  showAdd: boolean = true;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  cancel() {
    this.router.navigateByUrl('/customers');
  }
}
