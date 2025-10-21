import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-verification',
  imports: [],
  templateUrl: './email-verification.html',
  styleUrl: './email-verification.scss',
})
export class EmailVerification {
  protected email: string = '';

  constructor(private readonly router: Router) {
    const navigation = this.router.currentNavigation();
    if (navigation?.extras?.state) {
      this.email = navigation.extras.state['email'];
    }
  }
}
