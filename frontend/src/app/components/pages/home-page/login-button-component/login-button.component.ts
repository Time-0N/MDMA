import { Component } from '@angular/core';
import {MatCard} from '@angular/material/card';
import {MatFormField, MatInput, MatError} from '@angular/material/input';
import {NgIf} from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthenticationRequest, AuthService, TokenResponse} from '../../../../generated';
import {Router} from '@angular/router';
import {MatLabel} from '@angular/material/form-field';
import {MatButton} from '@angular/material/button';
import {AuthWrapperService} from '../../../../core/auth/auth-wrapper.service';

@Component({
  selector: 'app-login-button',
  imports: [
    MatCard,
    MatFormField,
    MatInput,
    MatError,
    NgIf,
    ReactiveFormsModule,
    MatLabel,
    MatButton
  ],
  templateUrl: './login-button.component.html',
  styleUrl: './login-button.component.scss'
})
export class LoginButtonComponent {
  loginForm!: FormGroup;
  errorMessage = '';
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private authWrapper: AuthWrapperService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForms();
  }

  private initializeForms(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    if (this.loginForm.invalid) return;

    const authRequest: AuthenticationRequest = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    }

    this.authService.loginUser(authRequest)
      .subscribe({
        next: (response) => {
          this.handleAuthentication(response);
          this.router.navigate(['/user-home']);
        },
        error: (err) => {
          this.handleError(err, 'Login failed');
        }
      });
  }

  private handleAuthentication(tokenResponse: TokenResponse): void {
    if (!tokenResponse?.accessToken) {
      this.errorMessage = 'Invalid authentication response';
      this.isLoading = false;
      return;
    }
    this.authWrapper.storeToken(tokenResponse);
    this.isLoading = false;
  }

  private handleError(err: any, defaultMessage: string): void {
    this.errorMessage = err.error?.error?.message ||
      err.error?.message ||
      defaultMessage;
    this.isLoading = false;
  }

  get form(): FormGroup {
    return this.loginForm;
  }
}
