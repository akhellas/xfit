import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: FirebaseListObservable<any[]>;
  
  constructor(af: AngularFire) {
    this.clients = af.database.list('stores/store1/clients');
  }

  ngOnInit() { }
}
