import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { ToastService } from '../toast.service';
import { Company } from './company';

@Injectable()
export class CompaniesService {
  private url: string = 'companies';
  public items: FirebaseListObservable<any>;

  constructor(
    private af: AngularFire,
    private toastService: ToastService
  ) {
    this.items = af.database.list(this.url);

    this.items.subscribe(items => {
       //this.toastService.success('Loaded');
    }, error => {
      this.toastService.error(error);
    });
  }

  item(key: string) : FirebaseObjectObservable<any> {
    return this.af.database.object(this.url + '/' + key);
  }

  insert() {
    let company = new Company();
    company.name = "Νέα Εταιρεία";
    company.isActive = true;
    
    this.items.push(company)
              .then(c => {
                this.toastService.success('Item ' +  company.name + ' inserted successfully');
              })
              .catch(error => {
                this.toastService.error(error);
              });
  }

  update(item: any) {
    this.af.database.object(this.url + '/' + item.$key)
                    .update(item);
  }

  remove(item: any) {
    this.items.remove(item.$key);
  }
}
