import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { Product } from './products.models';

@Injectable()
export class ProductsService {
  public products: FirebaseListObservable<any>;
  public product: FirebaseObjectObservable<Product>;

  private url = 'products';

  constructor(
    private af: AngularFire
  ) { 
    this.products = this.af.database.list(this.url);
  }

  getSingle(key: string) {
    this.product = this.af.database.object(this.url + '/' + key);
    return this.product;
  }

  insert() {
    let product = { 
      name: 'New product', 
      price: 0, 
      duration: 0 
    };
    this.products.push(product);
  }

  remove(product: any) {
    this.products.remove(product.$key);
  }
}
