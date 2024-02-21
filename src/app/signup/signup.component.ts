import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Validation from '../utils/validation';
import { CommonConstants } from '../constants/common-constants';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  submitted = false;

  // Common Constants
  signupTitle = CommonConstants.SIGNUP_TITLE;
  firstNameErr = CommonConstants.FIRSTNAME_ERROR;
  firstName = CommonConstants.FIRSTNAME;
  lastName = CommonConstants.LASTNAME;
  lastNameErr = CommonConstants.LASTNAME_ERROR;
  userName = CommonConstants.USERNAME;
  userNameErr1 = CommonConstants.USERNAME_ERROR1;
  userNameErr2 = CommonConstants.USERNAME_ERROR2;
  userNameErr3 = CommonConstants.USERNAME_ERROR3;
  email = CommonConstants.EMAIL;
  emailErr1 = CommonConstants.EMAIL_ERROR1;
  emailErr2 = CommonConstants.EMAIL_ERROR2;
  password = CommonConstants.PASSWORD;
  passwordErr1 = CommonConstants.PASSWORD_ERROR1;
  passwordErr2 = CommonConstants.PASSWORD_ERROR2;
  passwordErr3 = CommonConstants.PASSWORD_ERROR3;
  confirmPswd = CommonConstants.CONFIRM_PASSWORD;
  confirmPswdErr1 = CommonConstants.CONFIRM_PASSWORD_ERROR1;
  confirmPswdErr2 = CommonConstants.CONFIRM_PASSWORD_ERROR2;
  signup = CommonConstants.SIGNUP;
  reset = CommonConstants.RESET;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstName: ['test', Validators.required],
      lastName: ['123', Validators.required],
      userName: ['test123', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      email: ['test@123', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      confirmPassword: ['123456', Validators.required]
    },
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.signupForm.controls;
  }
  
  onSubmit(): void {
    this.submitted = true;
    if (this.signupForm.invalid) {
      return;
    }

    this.apiService.signupUserDetails(this.signupForm.value).subscribe(data => {
      if (data) {
          console.log("{}", data)
      }
    });
    console.log(JSON.stringify(this.signupForm.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.signupForm.reset();
  }
}
