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
    // I reclaim token from local storage
    // I edit my header adding data

    // If token exists, I add it to my requests. If it does not exist (first login/authentication), nothing happens

    if (this.requestService.isLoggedIn()) {
    const authToken = this.requestService.getTokenFromStorage();

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
