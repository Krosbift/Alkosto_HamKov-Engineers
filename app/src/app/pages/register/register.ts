import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Register as MyRegisterService } from '../../services/register';
import { RegisterUser } from '../../types/register-user';


@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  protected email: string = '';
  protected registerForm: FormGroup;
  protected submitted = false;

  constructor(
    private readonly router: Router,
    private readonly fb: FormBuilder,
    private readonly myRegisterService: MyRegisterService,
  ) {
    const navigation = this.router.currentNavigation();
    if (navigation?.extras?.state) {
      this.email = navigation.extras.state['email'];
    }

    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9]{10}$/),
        ],
      ],
      terms: [false, [Validators.requiredTrue]],
    });
  }

  protected modifyEmail(event?: Event) {
    if (event) event.preventDefault();
    this.router.navigate(['/emailVerification'], {
      state: { email: this.email, userExists: false },
    });
  }

  protected controlInvalid(name: 'firstName' | 'lastName' | 'phone' | 'terms'): boolean {
    const ctrl = this.registerForm.get(name);
    return !!(ctrl && ctrl.invalid && (ctrl.touched || this.submitted));
  }

  protected onSubmit(): void {
    this.submitted = true;
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const value = this.registerForm.value;
    const user: RegisterUser = {
      nombre: value.firstName,
      apellido: value.lastName,
      email: this.email,
      telefono: value.phone,
    }
    
    this.myRegisterService.registerUser(user).subscribe({
      next: (res: RegisterUser) => {
        localStorage.setItem('userName', res.nombre);
        localStorage.setItem('userLastName', res.apellido);
        localStorage.setItem('userEmail', res.email);
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
