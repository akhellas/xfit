import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    public af: AngularFire,
    private router: Router
  ) {}

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
