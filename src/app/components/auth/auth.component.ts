import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  loginForm!: FormGroup;
  signupForm!: FormGroup;
  isLoginTab = true;
  submitted = false;
  loading = false;
  error = '';

  demoEmail = 'demo@example.com';
  demoPassword = 'password123';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForms();
  }

  initializeForms(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (!password || !confirmPassword) {
      return null;
    }

    return password.value === confirmPassword.value ? null : { passwordMismatch: true };
  }

  switchTab(isLogin: boolean): void {
    this.isLoginTab = isLogin;
    this.submitted = false;
    this.error = '';
  }

  useDemoAccount(): void {
    this.loginForm.patchValue({
      email: this.demoEmail,
      password: this.demoPassword
    });
    this.onLoginSubmit();
  }

  isDemoCredentials(email: string, password: string): boolean {
    return email === this.demoEmail && password === this.demoPassword;
  }

  get loginFormControls() {
    return this.loginForm.controls;
  }

  get signupFormControls() {
    return this.signupForm.controls;
  }

  onLoginSubmit(): void {
    this.submitted = true;
    this.error = '';

    if (this.loginForm.invalid) {
      return;
    }

    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.loading = true;

    if (this.isDemoCredentials(email, password)) {
      this.authService.setToken('demo-token');
      this.router.navigate(['/dashboard']);
      return;
    }

    this.authService.login(this.loginForm.value).subscribe(
      (response) => {
        this.authService.setToken(response.token);
        this.router.navigate(['/dashboard']);
      },
      (err) => {
        this.loading = false;
        this.error = err.error?.message || 'Login failed. Please try again.';
      }
    );
  }

  onSignupSubmit(): void {
    this.submitted = true;
    this.error = '';

    if (this.signupForm.invalid) {
      return;
    }

    this.loading = true;
    this.authService.signup(this.signupForm.value).subscribe(
      (response) => {
        this.authService.setToken(response.token);
        this.router.navigate(['/dashboard']);
      },
      (err) => {
        this.loading = false;
        this.error = err.error?.message || 'Signup failed. Please try again.';
      }
    );
  }
}
