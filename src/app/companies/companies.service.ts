import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { ApiService } from '../api.service';
import { ToastService } from '../toast.service';

@Injectable()
export class CompaniesService extends ApiService {
  constructor(af: AngularFire, toastService: ToastService) {
    super(af, toastService, 'companies');
  }
}
