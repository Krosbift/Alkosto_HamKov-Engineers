import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  protected email: string = '';

  constructor(private readonly router: Router) {
    const navigation = this.router.currentNavigation();
    if (navigation?.extras?.state) {
      this.email = navigation.extras.state['email'];
    }
  }

  protected modifyEmail() {
    this.router.navigate(['/emailVerification'], {
      state: { email: this.email, userExists: false },
    });
  }
}
