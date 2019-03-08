import { Injectable } from '@angular/core';
import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
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
    // Je modifie mon header en y ajoutant un cookie :

    // Si le token existe bien, je l'ajoute à toutes les requêtes
    // S'il n'existe pas (cas des premiers accès login/authentification), je ne fais rien.
    console.log(this.requestService.isLoggedIn);

    if (this.requestService.isLoggedIn()) {
    const authToken = this.requestService.getTokenFromCookie();
    console.log(authToken);

    const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + authToken,
        'Content-Type': 'application/json'
        });

      // request.headers.append('Authorization', 'Bearer ' + authToken);
    const authReq = request.clone({headers});

    return next.handle(authReq);

    }
    else { return next.handle(request); }
  }

}
