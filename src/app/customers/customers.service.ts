import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { Customer } from './customer';

@Injectable()
export class CustomersService {
  private url: string = 'customers';
  public items: FirebaseListObservable<any>;

  constructor(private af: AngularFire) {
    this.items = af.database.list(this.url);
  }

  item(key: string) : FirebaseObjectObservable<any> {
    return this.af.database.object(this.url + '/' + key);
  }

  insert() {
    // this.items.push(new Company('New company', '', true));
  }

  update(item: any) {
    this.af.database.object(this.url + '/' + item.$key)
                    .update(item);
  }

  remove(item: any) {
    this.items.remove(item.$key);
  }
}
