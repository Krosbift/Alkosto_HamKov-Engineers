import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-options',
  templateUrl: './login-options.html',
  styleUrl: './login-options.scss',
})
export class LoginOptions {
  protected email: string = '';

  constructor(private readonly router: Router) {
    const navigation = this.router.currentNavigation();
    if (navigation?.extras?.state) {
      this.email = navigation.extras.state['email'];
    }
  }

  protected modifyEmail() {
    this.router.navigate(['/emailVerification'], { 
      state: { email: this.email, userExists: false } 
    });
  }
}
