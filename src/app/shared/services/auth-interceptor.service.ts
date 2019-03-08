import { Injectable } from '@angular/core';
import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';


@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private requestService: RequestService) { }

  // ------------------------------------------------------------------------------------------------------ //

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Je récupère le token depuis le cookie ;
    const authToken = this.requestService.getTokenFromCookie();

    // Je modifie mon header en y ajoutant un cookie :
    request.headers.set('Authorization', 'Bearer ' + authToken);

    // Si le token existe bien, je l'ajoute à toutes les requêtes
    // S'il n'existe pas (cas des premiers accès login/authentification), je ne fais rien.
    if (this.requestService.isLoggedIn) {
      const authReq = request.clone({
        headers: request.headers
      });
      return next.handle(authReq);

    }
  }

}
