import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConstants } from '../constants/api-constants';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  loginUserDetails(userDetails: any): Observable<any> {
    return this.http.post(ApiConstants.getHostUrl() + ApiConstants.loginUrl, userDetails);
  }

  signupUserDetails(userDetails: any): Observable<any> {
    return this.http.post(ApiConstants.getHostUrl() + ApiConstants.create, userDetails);
  }
}
