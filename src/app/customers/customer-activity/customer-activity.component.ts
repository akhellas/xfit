import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-activity',
  templateUrl: './customer-activity.component.html',
  styleUrls: ['./customer-activity.component.sass']
})
export class CustomerActivityComponent implements OnInit {
  showNewSub: boolean = true;
  paneltab: number = 0;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onInsert() {
    this.showNewSub = true;
  }
  cancel() {
    this.router.navigateByUrl('/customers');
  }
}
