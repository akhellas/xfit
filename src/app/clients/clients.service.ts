import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ClientsService {
  public clients: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.clients = af.database.list('stores/store1/clients');
  }
}
