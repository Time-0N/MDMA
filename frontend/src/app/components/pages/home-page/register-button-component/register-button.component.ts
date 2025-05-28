import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService, UserRegistrationRequest} from '../../../../generated';
import {Router} from '@angular/router';
import {MatError, MatFormField, MatInput} from '@angular/material/input';
import {NgIf} from '@angular/common';
import {MatLabel} from '@angular/material/form-field';
import {MatCard} from '@angular/material/card';
import {MatButton} from '@angular/material/button';

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

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
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

    this.authService.registerUser(registrationRequest);
  }

  get form(): FormGroup {
    return this.registerForm;
  }
}
