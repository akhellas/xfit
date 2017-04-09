import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { CompaniesService } from '../companies.service';
import { Company } from '../company';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  item: Observable<any> = new Observable<any>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CompaniesService
  ) { }

  ngOnInit() {
    this.route.params
              .switchMap((params: Params) => this.service.item(params['id']))
              .subscribe((item: any) => this.item = item);
  }

  save() {
    this.service.update(this.item);
    this.router.navigateByUrl('/companies');
  }
}
