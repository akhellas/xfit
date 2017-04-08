import { Component, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(
    public af: AngularFire,
    private router: Router,
    public toastr: ToastsManager,
    private vcr: ViewContainerRef
  ) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  login() {
    this.af.auth.login()
                .catch((error) => {
                  this.router.navigate(['/']);
                });
  }

  logout() {
    this.af.auth.logout()
                .then(() => this.router.navigate(['/']));
  }
}
