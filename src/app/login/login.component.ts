import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonConstants } from '../constants/common-constants';
import { AuthService } from '../services/auth.service';
import { SharedService } from '../services/shared.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isValidUser: boolean = false;
  invalidUserMsg: string = '';

  email = CommonConstants.EMAIL;
  emailErr1 = CommonConstants.EMAIL_ERROR1;
  password = CommonConstants.PASSWORD;
  passwordErr = CommonConstants.PASSWORD_ERROR1;

  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService,
    private apiService: ApiService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['a@gmail.com', [Validators.required]],
      password: ['567', [Validators.required]]
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  submit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.apiService.loginUserDetails(this.loginForm.value).subscribe(data => {
      if (data) {
        let email = this.loginForm.value.email;
        this.authService.loginUser();
        this.router.navigate(['user-profile', email]);
        this.isValidUser = data;
        this.invalidUserMsg = "";
      } else {
        this.isValidUser = false;
        this.invalidUserMsg = "Email and Password is invalid";
      }
    });
  }

  signup() {
    this.router.navigateByUrl('signup');
  }

}
