import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { Product } from './product';

@Injectable()
export class ProductsService {
  private url: string = 'companies/-Kfrps-nEI3ccNOS9eeI/products';
  public items: FirebaseListObservable<any>;

  constructor(private af: AngularFire) {
    this.items = af.database.list(this.url);
  }

  item(key: string): FirebaseObjectObservable<any> {
    return this.af.database.object(this.url + '/' + key);
  }

  insert() {
    var newProduct = new Product();
    newProduct.description = "Νέο";
    newProduct.duration = 1;
    newProduct.isPerVisit = false;
    newProduct.status = false;
    newProduct.price = 50;
    this.items.push(newProduct);
  }

  update(item: any) {
    this.af.database.object(this.url + '/' + item.$key)
      .update(item);
  }

  remove(item: any) {
    this.items.remove(item.$key);
  }
}
