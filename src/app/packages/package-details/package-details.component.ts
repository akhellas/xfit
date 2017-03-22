import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { PackagesService } from '../packages.service';

@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.css']
})
export class PackageDetailsComponent implements OnInit {
  pkg: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PackagesService
  ) { }

  ngOnInit() {
    this.route.params
          .switchMap((params: Params) => this.service.pkg(params['id']))
          .subscribe((pkg: any) => this.pkg = pkg);
  }
}
