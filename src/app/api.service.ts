import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { ToastService } from './toast.service';

@Injectable()
export class ApiService {
  public items: FirebaseListObservable<any>;

  constructor(
    private af: AngularFire,
    private toastService: ToastService,
    private url: string
  ) {
    this.items = af.database.list(this.url);

    this.items.subscribe(
      (items) => { }, 
      (error: Error) => this.toastService.error(error)
    );
  }

  item(key: string) : FirebaseObjectObservable<any> {
    return this.af.database.object(this.url + '/' + key);
  }

  insert(item: any) {    
    this.items.push(item)
              .then((inserted) => this.toastService.success('Item ' +  item.name + ' inserted successfully'))
              .catch((error: Error) => this.toastService.error(error));
  }

  update(item: any) {
    this.af.database.object(this.url + '/' + item.$key)
                    .update(item)
                    .then((updated) => this.toastService.success('Item ' +  item.name + ' updated successfully'))
                    .catch((error: Error) => this.toastService.error(error));
  }

  remove(item: any) {
    this.items.remove(item.$key)
              .then((removed) => this.toastService.success('Item ' +  item.name + ' removed successfully'))
              .catch((error: Error) => this.toastService.error(error));
  }
}
