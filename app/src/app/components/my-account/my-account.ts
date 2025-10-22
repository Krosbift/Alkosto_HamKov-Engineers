import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, signal, effect } from '@angular/core';
import { Router } from '@angular/router';

import { MyAccount as MyAccountService } from '../../services/my-account';

@Component({
  selector: 'app-my-account',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './my-account.html',
  styleUrl: './my-account.scss',
})
export class MyAccount {
  protected emailForm: FormGroup;
  protected stateMenu: boolean = false;
  protected emailTouched = signal<boolean>(false);
  protected isLoggedIn = signal<boolean>(false);
  protected userName = signal<string>('');
  protected userEmail = signal<string>('');

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly myAccountService: MyAccountService
  ) {
    this.emailForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
    });

    effect(() => {
      const emailControl = this.emailForm.get('email');
      const value = emailControl?.value;

      if (emailControl && (value?.length > 0 || emailControl.touched)) {
        this.emailTouched.set(true);
      }
    });

    this.checkUserSession();
  }

  private checkUserSession(): void {
    const userName = localStorage.getItem('userName');
    const userEmail = localStorage.getItem('userEmail');

    if (userName && userEmail) {
      this.isLoggedIn.set(true);
      this.userName.set(userName);
      this.userEmail.set(userEmail);
    } else {
      this.isLoggedIn.set(false);
    }
  }

  protected formError(): boolean {
    const emailControl = this.emailForm.get('email');
    return !!(
      emailControl &&
      emailControl.invalid &&
      this.emailTouched() &&
      !emailControl.pristine
    );
  }

  protected onEmailFocus(): void {
    this.emailTouched.set(true);
  }

  protected onEmailBlur(): void {
    const emailControl = this.emailForm.get('email');
    if (emailControl && emailControl.value.length === 0) {
      this.emailTouched.set(false);
    }
  }

  protected openOrCloseMenu(): void {
    this.stateMenu = !this.stateMenu;
  }

  protected onSubmit(): void {
    if (this.emailForm.valid) {
      const email = this.emailForm.get('email')?.value;

      this.myAccountService.findUserByEmail(email).subscribe({
        next: (res) => {
          if (res) {
            localStorage.setItem('userName', res.nombre);
            localStorage.setItem('userLastName', res.apellido);
            localStorage.setItem('userEmail', res.email);
            localStorage.setItem('userPhoneNumber', res.telefono);

            this.router.navigate(['/login/options'], {
              state: { email: email, userExists: true },
            });

            return this.closeMenu();
          }

          this.router.navigate(['/register'], {
            state: { email: email, userExists: false },
          });
          this.closeMenu();
        },
      });

      return;
    }

    this.emailForm.markAllAsTouched();
    this.emailTouched.set(true);
  }

  protected closeMenu(): void {
    this.stateMenu = false;
  }

  protected logout(): void {
    localStorage.removeItem('userName');
    localStorage.removeItem('userLastName');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userPhoneNumber');
    this.isLoggedIn.set(false);
    this.userName.set('');
    this.userEmail.set('');
    this.closeMenu();
    this.router.navigate(['/']);
  }
}
