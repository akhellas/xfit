import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ProductsService {
  af: AngularFire;
  public products: FirebaseListObservable<any>;

  constructor(af: AngularFire) {
    this.af = af;
    this.products = this.af.database.list('stores/store1/products');
  }

  product(id: string) {
    return this.af.database.object('stores/store1/products/' + id);
  }
}
