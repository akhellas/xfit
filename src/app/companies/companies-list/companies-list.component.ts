import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { CompaniesService } from '../companies.service';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css']
})
export class CompaniesListComponent implements OnInit {
  items: Observable<any>;

  constructor(
    private router: Router,
    private service: CompaniesService
  ) { }

  ngOnInit() {
    this.items = this.service.items;
  }

  onInsert() {
    this.service.insert();
  }

  onEdit(item: any) {
    this.router.navigate(['companies', item.$key]);
  }
  
  onDelete(item: any) {
    this.service.remove(item);
  }
}
