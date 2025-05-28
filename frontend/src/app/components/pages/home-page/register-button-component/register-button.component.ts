import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService, TokenResponse, UserRegistrationRequest} from '../../../../generated';
import {Router} from '@angular/router';
import {MatError, MatFormField, MatInput} from '@angular/material/input';
import {NgIf} from '@angular/common';
import {MatLabel} from '@angular/material/form-field';
import {MatCard} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {AuthWrapperService} from '../../../../core/auth/auth-wrapper.service';

@Component({
  selector: 'app-register-button',
  imports: [
    MatFormField,
    MatInput,
    ReactiveFormsModule,
    NgIf,
    MatLabel,
    MatError,
    MatCard,
    MatButton
  ],
  templateUrl: './register-button.component.html',
  styleUrl: './register-button.component.scss'
})
export class RegisterButtonComponent {
  registerForm!: FormGroup;
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
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      firstName: [''],
      lastName: ['']
    });
  }

  onRegister(): void {
    if (this.registerForm.invalid) return;

    const registrationRequest: UserRegistrationRequest = {
      username: this.registerForm.value.username,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName
    };

    this.authService.registerUser(registrationRequest)
      .subscribe({
        next: (response) => {
          if (response.token?.accessToken) {
            this.handleAuthentication(response.token);
            this.router.navigate(['/user-home']);
          }
        },
        error: (err) => {
          this.handleError(err, 'Registration failed');
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
    return this.registerForm;
  }
}
