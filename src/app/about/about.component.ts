import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  userProfileForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userProfileForm = this.formBuilder.group({

      salutation: ['Mr.', [Validators.required]],
      firstName: ['Arjoo', [Validators.required]],
      lastName: ['Kumar', [Validators.required]],
      email: ['arjoo@123.com', [Validators.required]],
      alt_email: ['anshul@345.com', [Validators.required]],
      phone: ['01123456789', [Validators.required]],
      mobile: ['7654321456', [Validators.required]],
      password: ['12345', [Validators.required]],
      address: ['address', [Validators.required]]        

    });

  }




}
