import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { Company } from './company';

@Injectable()
export class CompaniesService {
  private url: string = 'companies';
  public items: FirebaseListObservable<any>;

  constructor(private af: AngularFire) {
    this.items = af.database.list(this.url);
  }

  item(key: string) : FirebaseObjectObservable<any> {
    return this.af.database.object(this.url + '/' + key);
  }

  insert() {
    this.items.push(new Company('New company', '', true));
  }

  update(item: any) {
    this.af.database.object(this.url + '/' + item.$key)
                    .update(item);
  }

  remove(item: any) {
    this.items.remove(item.$key);
  }
}