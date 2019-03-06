import { TacheInterface } from 'src/app/shared/interface/tache';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


export class ProjetService {

constructor (private httpClient: HttpClient) {

}
  public getRemoteProjet(idProjet: number): Observable<TacheInterface[]> {
    return this.httpClient.get<TacheInterface[]>(environment.apiRoot + 'projet/listOne?idProjet=' + idProjet);
  }
}

