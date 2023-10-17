import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  signUpForm: FormGroup;

  signUpMode: boolean = false;
  private formSubmitAttempt: boolean = false;
  private formSignupSubmitAttempt: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      username: ['', Validators.required],
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.form?.get(field)?.valid && this.form?.get(field)?.touched) ||
      (this.form?.get(field)?.untouched && this.formSubmitAttempt)
    );
  }

  isFieldInvalidSignup(field: string) {
    return (
      (!this.signUpForm?.get(field)?.valid &&
        this.signUpForm?.get(field)?.touched) ||
      (this.signUpForm?.get(field)?.untouched && this.formSignupSubmitAttempt)
    );
  }

  onSubmit() {
    console.log('submit');
    var valid = false;
    if (this.form?.valid) {
      valid = this.authService.login(this.form.value);
    }
    valid ? (this.formSubmitAttempt = true) : null;
  }

  onSignUp() {
    console.log('signup');
    var valid = false;
    if (this.signUpForm?.valid) {
      valid = this.authService.signUp(this.signUpForm.value);
    }

    valid ? (this.formSignupSubmitAttempt = true) : null;
  }
}
