import * as moment from 'moment';
import { TacheInterface } from 'src/app/shared/interface/tache';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from './../../../environments/environment';
import { Injectable , Input} from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class TacheService{

    constructor(private httpClient: HttpClient){

    }
public getRemoteTaches(page): Observable<TacheInterface[]> { 

     
        return this.httpClient.get<TacheInterface[]>(
          environment.apiRoot+'tache/'+page)
      }

  
}