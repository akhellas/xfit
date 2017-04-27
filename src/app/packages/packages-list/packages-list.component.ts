import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Package } from './../package';

import { PackagesService } from '../packages.service';

@Component({
  selector: 'app-packages-list',
  templateUrl: './packages-list.component.html',
  styleUrls: ['./packages-list.component.sass']
})
export class PackagesListComponent implements OnInit {
  items: Observable<any>;

  constructor(
    private service: PackagesService
  ) { }

ngOnInit() {
    this.items = this.service.items;
  }
}
