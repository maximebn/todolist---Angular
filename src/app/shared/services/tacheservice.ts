import * as moment from 'moment';
import { TacheInterface } from 'src/app/shared/interface/tache';
import { HttpClient } from '@angular/common/http';
import {Observable, BehaviorSubject} from 'rxjs';
import {environment} from './../../../environments/environment';
import { Injectable , Input} from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class TacheService{
   tacheBehaviorSubject: BehaviorSubject<TacheInterface>= new BehaviorSubject<TacheInterface>({})

    constructor(private httpClient: HttpClient){

    }
public getRemoteTaches(page): Observable<TacheInterface[]> {
        return this.httpClient.get<TacheInterface[]>(
          environment.apiRoot+'tache/'+page)
      }

public updateTache(tache:TacheInterface) :Observable<any>{
  const tacheDto = JSON.stringify(tache);
console.log(tacheDto);
  return this.httpClient.put(environment.apiRoot+ 'tache/update', tacheDto )
}

public deleteOne(tache: TacheInterface){

  return this.httpClient.delete(environment.apiRoot + 'tache/deleteOne?idTache=' + tache.id);
}

public remplaceTacheSubject(tache: TacheInterface){
  this.tacheBehaviorSubject.next(tache);
}
public addTask(tache: TacheInterface): Observable<TacheInterface> {
  const uri: string = environment.apiRoot + 'tache/save';
  const tachejson=JSON.stringify(tache);

  return this.httpClient.post<any>(uri, tachejson)
}
}
