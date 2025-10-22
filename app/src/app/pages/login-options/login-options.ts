import { Component, signal, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CodeAlert } from './components/code-alert/code-alert';

@Component({
  imports: [CodeAlert],
  selector: 'app-login-options',
  templateUrl: './login-options.html',
  styleUrl: './login-options.scss',
})
export class LoginOptions {
  @ViewChild(CodeAlert) codeAlert!: CodeAlert;
  
  protected email: string = '';
  protected lastFourDigits = signal<string>('****');

  constructor(private readonly router: Router) {
    const navigation = this.router.currentNavigation();
    if (navigation?.extras?.state) {
      this.email = navigation.extras.state['email'];
    }

    const phoneNumber = localStorage.getItem('userPhoneNumber');
    if (phoneNumber && phoneNumber.length >= 4) {
      this.lastFourDigits.set(phoneNumber.slice(-4));
    }
  }

  protected modifyEmail() {
    this.router.navigate(['/emailVerification'], {
      state: { email: this.email, userExists: false },
    });
  }

  protected openVerification(method: string): void {
    this.codeAlert.open(method);
  }
}
