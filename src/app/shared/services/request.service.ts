import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private httpClient: HttpClient, private oauthService: OAuthService){
        this.oauthService.loginUrl = 'http://localhost:8000/oauth/token';
        this.oauthService.redirectUri = 'http://localhost:4200/api/';
        this.oauthService.clientId = 'formation';
        this.oauthService.dummyClientSecret = 'secret';
        this.oauthService.scope = 'read write';
        this.oauthService.setStorage(sessionStorage);
        this.oauthService.tryLogin({});
    }

  obtainAccessToken(){
      this.oauthService.initImplicitFlow();
  }

  getAccessToken() {
    this.oauthService.getAccessToken();
  }

  isLoggedIn() {
    if (this.oauthService.getAccessToken() === null) {
       return false;
    }
    return true;
  }

  logout() {
      this.oauthService.logOut();
      location.reload();
  }

  //Ajouter la requÃªte serveur pour la rÃ©vocation de token.
}

