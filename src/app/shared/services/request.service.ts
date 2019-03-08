import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private httpClient: HttpClient, private cookieService: CookieService, private router: Router) {}

   // ------------------------------------------------------------------------------------------------------ //
  // Je demande un token à partir du mail, password, et des données oAuth2 : un body, un en-tête, une uri.
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
  // Je demande au back, et sauvegarde le token dans un cookie :
    this.httpClient.post<any>(uri, body.toString(), {headers}).subscribe(
      data => this.saveTokenInCookie(data));
  }

  // Je redirgie vers l'api si token généré
  saveTokenInCookie(token){
    this.cookieService.set('access_token', token.access_token);
    console.log( this.cookieService.get('access_token'));
    this.router.navigate(['/api']);
  }

  getTokenFromCookie() {
    return this.cookieService.get('access_token');
  }

  isLoggedIn(): boolean {
    console.log(this.cookieService.check('access_token'));
    return this.cookieService.check('access_token');
  }

  // Si token : vers l'api, sinon vers login :
  checkCredentials() {
    if (!this.isLoggedIn()) {
        this.router.navigate(['/']);
    } else {
      this.router.navigate(['/api']);
    }
  }

  // logout : je supprimer le cookie, donc le token, je redirige vers login :
  logout() {
      this.cookieService.deleteAll();
      this.router.navigate(['/']);
    }

}

