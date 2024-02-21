import { Component, Input, OnInit } from '@angular/core';
import { CommonConstants } from '../constants/common-constants';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loggedIn: boolean = false;
  userLoggedIn: string;

  // Common Constants
  homePageName: string = CommonConstants.HOME_PAGE_NAME;
  login: string = CommonConstants.LOGIN;
  signup: string = CommonConstants.SIGNUP;

  constructor(private router: Router, private authService: AuthService, private sharedService: SharedService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe((status) => {
      this.loggedIn = status;
    });
  }
  
  loginUser() {
    this.router.navigateByUrl('login');
  }

  signupUser() {
    this.router.navigateByUrl('signup');
  }
}
