import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class PackagesService {
  public packages: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.packages = af.database.list('stores/store1/packages');
  }
}
