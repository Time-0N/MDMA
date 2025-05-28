import { Component } from '@angular/core';
import {MatCard} from '@angular/material/card';
import {MatFormField, MatInput, MatError} from '@angular/material/input';
import {NgIf} from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthenticationRequest, AuthService} from '../../../../generated';
import {Router} from '@angular/router';
import {MatLabel} from '@angular/material/form-field';
import {MatButton} from '@angular/material/button';

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
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
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

    this.authService.loginUser(authRequest);
  }

  get form(): FormGroup {
    return this.loginForm;
  }
}
