import { ProjetInterface } from './../interface/projet';
import { TacheInterface } from 'src/app/shared/interface/tache';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProjetService {
public behaviorSubject : BehaviorSubject<Array<ProjetInterface>> = new BehaviorSubject<Array<ProjetInterface>>([]);

constructor (private httpClient: HttpClient) {

}
  public getRemoteTachesProjet(idProjet: number): Observable<TacheInterface[]> {
    return this.httpClient.get<TacheInterface[]>(environment.apiRoot + 'projet/findOne?idProjet=' + idProjet);
  }

  public getRemoteProjets(): Observable<ProjetInterface[]> {
    return this.httpClient.get<ProjetInterface[]>(environment.apiRoot + 'projet/findAll');
  }

  public saveProjetRemote(projet: ProjetInterface): Observable<ProjetInterface>{
    const projetDto = JSON.stringify(projet);
    console.log(projet);
    return this.httpClient.post(environment.apiRoot + 'projet/save', projetDto);
  }

  public remplaceSubject(projets: Array<ProjetInterface>){
    this.behaviorSubject.next(projets);
  }

  public updateProjetRemote(projet: ProjetInterface): Observable<ProjetInterface>{
    const projetDto= JSON.stringify(projet);
    console.log(projetDto);
    return this.httpClient.put(environment.apiRoot+ 'projet/update', projetDto);
  }

  public deleteById(projet: ProjetInterface): Observable<ProjetInterface[]>{
    return this.httpClient.delete<ProjetInterface[]>(environment.apiRoot + 'projet/deleteById?idProjet=' + projet.id);
  }
}

