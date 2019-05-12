import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  // --------------------------------------------------------------------------------- //
  // User account creation :
  public addUser(user: any): Observable<any> {
    const uriPost = environment.apiRoot + 'registration';
    const httpOptions = {
      headers: new HttpHeaders({
       'Content-Type': 'application/json;charset=UTF-8'})
   };

    const coco = JSON.stringify(user);
    return this.httpClient.post<any>(uriPost, coco, httpOptions);
  }

  public deleteUser(): Observable<any> {
    const uriPost = environment.apiRoot + 'user/delete';
    return this.httpClient.delete<any>(uriPost);
  }

  public getPerformance(): Observable<any> {
    const uriGet = environment.apiRoot + 'user/completionIndex';
    return this.httpClient.get<any>(uriGet);
  }

}

