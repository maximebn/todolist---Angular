import { CookieService } from 'ngx-cookie-service';
import { RequestService } from 'src/app/shared/services/request.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpErrorResponse, HttpHandler, HttpEvent, HttpResponse} from '@angular/common/http';

import { Observable, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpErrorInterceptorService implements HttpInterceptor {

  constructor(private snackBar: MatSnackBar, private router: Router,
              private requestService: RequestService, private cookieService: CookieService) {
}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.error instanceof Error) {
          // Erreur côté client :
          console.error('Aie, erreur :', error.error.message);
        } else {
          if (error.status === 403) {
            // tslint:disable-next-line:max-line-length
            this.snackBar.open('Opération refusée : ce compte existe déjà. Veuillez utiliser une autre adresse ou vous connecter', 'Fermer');
          }
          else if (error.status === 401) {
            this.snackBar.open('Vous n\'êtes pas autorisé à accéder à cette ressource. Veuillez vous connecter.', 'Fermer');
            localStorage.removeItem('access_token');
            console.log(localStorage.getItem('access_token'));
            this.router.navigate(['/']);
          }
          else if (error.status === 404) {
            this.snackBar.open('La page que vous demandez n\'existe plus !', 'Fermer');
            this.router.navigate(['/api']);
          }
        }
        return EMPTY;
      })
    );
  }
}
