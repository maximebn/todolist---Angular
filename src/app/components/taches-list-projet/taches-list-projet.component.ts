import { TacheInterface } from 'src/app/shared/interface/tache';
import { Component, OnInit, Input } from '@angular/core';
import { ProjetService } from 'src/app/shared/services/projetservice';
import { ProjetInterface } from 'src/app/shared/interface/projet';


@Component({
  selector: 'app-taches-list-projet',
  templateUrl: './taches-list-projet.component.html',
  styleUrls: ['./taches-list-projet.component.scss']
})
export class TachesListProjetComponent implements OnInit {

  public taches: Array< TacheInterface >;
  @Input() projet: ProjetInterface;
//TODO gérer <app listTacheProjet [projet] = "{id: '', titre: ''}">

constructor(private projetService: ProjetService
  ) { }

  ngOnInit() {
    this.getRemote();
  }
  public getRemote() {
    this.projetService.getRemoteProjet(this.projet.id).subscribe((resultat) => {
      this.taches = resultat;
    });
  }
}
