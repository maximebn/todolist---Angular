import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private httpClient: HttpClient,
              private router: Router, private snackBar: MatSnackBar) {}

   // ------------------------------------------------------------------------------------------------------ //
  // I ask for a token from mail, passwxord and OAuth2 data : body, header, uri.
  
  obtainAccessToken(loginData: any): void {
    const uri = 'http://localhost:8000/oauth/token';

    const body = new HttpParams()
      .set('username', loginData.mail)
      .set('password', loginData.password)
      .set('grant_type', 'password')
      .set('scope', 'read write');

    const headers = {
    'Authorization': 'Basic Zm9ybWF0aW9uOnNlY3JldA==',
    'Content-type': 'application/x-www-form-urlencoded'
    };

  // ------------------------------------------------------------------------------------------------------ //
  // I request to back-end, and save token in local storage :
    this.httpClient.post<any>(uri, body.toString(), {headers}).subscribe(
      data => {
        this.saveToken(data);
    });
  }

  saveToken(token){
    localStorage.setItem('access_token', token.access_token);
    this.router.navigate(['/api']);
  }

  getTokenFromStorage() {
    return localStorage.getItem('access_token');
  }

  isLoggedIn(): boolean {
    if (localStorage.getItem('access_token')) {
      return true;
    }
    return false;
  }

  // If token : api, if not : login
  checkCredentials() {
    console.log(this.isLoggedIn);
    if (!this.isLoggedIn()) {
      this.logout();
    } else {
      this.router.navigate(['/api']);
    }
  }

  // logout : I delete local storage, then home page :
  logout() {
      localStorage.removeItem('access_token');
      this.router.navigate(['/']);
    }

}

