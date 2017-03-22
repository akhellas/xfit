import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {
  clients: Observable<any>;

  constructor(service: ClientsService) {
    this.clients = service.clients;
  }

  ngOnInit() {
  }

}
