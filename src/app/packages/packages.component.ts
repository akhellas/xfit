import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PackagesService } from './packages.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {
  packages: Observable<any[]>;
  
  constructor(service: PackagesService) {
    this.packages = service.packages;
  }

  ngOnInit() { }
}
