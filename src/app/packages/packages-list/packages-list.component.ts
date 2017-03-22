import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { PackagesService } from '../packages.service';

@Component({
  selector: 'app-packages-list',
  templateUrl: './packages-list.component.html',
  styleUrls: ['./packages-list.component.css']
})
export class PackagesListComponent implements OnInit {
  packages: Observable<any[]>;
  
  constructor(
    private router: Router,
    private service: PackagesService
  ) { }

  ngOnInit() {
    this.packages = this.service.packages;
  }

  onSelect(pkg: any) {
    this.router.navigate(['/packages', pkg.id]);
  }
}
