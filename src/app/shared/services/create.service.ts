import{ environment } from '../../../environments/environment'
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TacheInterface } from '../interface/tache';

@Injectable({
  providedIn: 'root'
})
export class CreateTask {
  
  constructor(private httpClient: HttpClient) {}

  public addTask(tache: TacheInterface): Observable<any> {
    const uri: string = environment.apiRoot + 'tache/save';
    const tachejson=JSON.stringify(tache);
console.log(tachejson);
    return this.httpClient.post<any>(uri, tachejson)
}

}
