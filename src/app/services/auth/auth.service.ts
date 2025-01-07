import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}

  /**
   * user login
   * @param payload
   * @returns
   */
  login(payload: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/users/login`, payload);
  }
  
  /**
   * user signup
   * @param user
   * @returns
   */
  signup(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/users/signup`, user);
  }
}
