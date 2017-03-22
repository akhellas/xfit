import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ClientsService } from './clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: Observable<any>;

  constructor(service: ClientsService) {
    this.clients = service.clients;
  }

  ngOnInit() { }
}
