import { Component } from '@angular/core';
import { InputField } from '../../../shared/components/input-field/input-field';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/authService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [InputField, CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  get emailControl() {
    return this.loginForm.get('email') as FormControl;
  }

  get passwordControl() {
    return this.loginForm.get('password') as FormControl;
  }

  login() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      if (!email || !password) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
      }

      this.authService.login(email, password).subscribe({
        next: () => {
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          alert('Erro ao fazer login: ' + (error.error?.message || 'Tente novamente mais tarde.'));
        },
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
