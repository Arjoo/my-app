import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userName: string;
  isLoggedIn: boolean;
  userProfile: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userName = params['userName'];
    });
  }

  logout() {
    this.authService.logoutUser();
    this.router.navigateByUrl('');
  }

}
