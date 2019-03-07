import { TacheInterface } from 'src/app/shared/interface/tache';
import { Component, OnInit, Input } from '@angular/core';
import { ProjetService } from 'src/app/shared/services/projetservice';
import { ProjetInterface } from 'src/app/shared/interface/projet';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-taches-list-projet',
  templateUrl: './taches-list-projet.component.html',
  styleUrls: ['./taches-list-projet.component.scss']
})
export class TachesListProjetComponent implements OnInit {

  public taches: Array< TacheInterface >;
  projet: ProjetInterface={};
//TODO gérer <app listTacheProjet [projet] = "{id: '', titre: ''}">

constructor(
  private projetService: ProjetService,
  private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getRemote();
  }
  public getRemote() {
     this.projet.id = +this.route.snapshot.paramMap.get('id');
     this.projet.titre=this.route.snapshot.paramMap.get('titre');
     console.log(this.projet);
     this.projetService.getRemoteTachesProjet(this.projet.id).subscribe((resultat) => {
      this.taches = resultat;
    });
  }

}
