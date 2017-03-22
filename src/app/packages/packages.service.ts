import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class PackagesService {
  public packages: FirebaseListObservable<any[]>;

  constructor(
    private af: AngularFire
  ) {
    this.packages = af.database.list('stores/store1/packages');
  }

  pkg(id: string) {
    return this.af.database.object('stores/store1/packages/' + id);
  }
}
