import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {
  packages: FirebaseListObservable<any[]>;
  
  constructor(af: AngularFire) {
    this.packages = af.database.list('stores/store1/packages');
  }

  ngOnInit() { }
}
