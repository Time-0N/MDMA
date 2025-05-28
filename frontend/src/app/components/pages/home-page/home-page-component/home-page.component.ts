import { Component } from '@angular/core';
import {MatCard} from '@angular/material/card';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {FormBuilder, FormGroup} from '@angular/forms';
import {LoginButtonComponent} from '../login-button-component/login-button.component';
import {NgIf} from '@angular/common';
import {RegisterButtonComponent} from '../register-button-component/register-button.component';

@Component({
  selector: 'app-home-page',
  imports: [
    MatCard,
    MatButtonToggleGroup,
    MatButtonToggle,
    LoginButtonComponent,
    NgIf,
    RegisterButtonComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  isLoginMode = true;
  loginForm!: FormGroup;
  registerForm!: FormGroup;
  errorMessage = '';
  isLoading = false;

  constructor(
  ) {}

  toggleAuthMode(): void {
    this.isLoginMode = !this.isLoginMode;
    this.errorMessage = '';
  }
}
