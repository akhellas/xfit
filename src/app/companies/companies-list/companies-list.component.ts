import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { CompaniesService } from '../companies.service';
import { Company }  from '../company';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.sass']
})
export class CompaniesListComponent implements OnInit {
  items: Observable<any>;

  constructor(
    private router: Router,
    private service: CompaniesService
  ) { }

  ngOnInit() {
    this.items = this.service.items;
    console.log(this.items);
  }

  onInsert() {
    let company = new Company();
    company.name = "Νέα Εταιρεία";
     company.address = "Χωρίς Διεύθυνση"
    company.isActive = true;

    this.service.insert(company);
  }

  onEdit(item: any) {
    this.router.navigate(['companies', item.$key]);
  }
  
  onDelete(item: any) {
    this.service.remove(item);
  }
}
