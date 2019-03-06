import { Injectable } from '@angular/core';
import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';


@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private requestService: RequestService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // RÃ©cupÃ©rer le token utilisateur
    const authToken = this.requestService.getAccessToken();

    request.headers.set('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
    request.headers.set('Authorization', 'Bearer ' + authToken);

    // Clonage : bonne pratique (pour conservation de la requÃªte entrante si nÃ©cessaire) mais pas obligatoire :
    const authReq = request.clone({
      headers: request.headers
    });
    return next.handle(authReq);
  }

}
