import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PackagesService } from '../packages.service';

@Component({
  selector: 'app-packages-list',
  templateUrl: './packages-list.component.html',
  styleUrls: ['./packages-list.component.css']
})
export class PackagesListComponent implements OnInit {
  packages: Observable<any[]>;
  
  constructor(service: PackagesService) {
    this.packages = service.packages;
  }

  ngOnInit() {
  }

}
