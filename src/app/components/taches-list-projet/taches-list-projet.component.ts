import { TacheInterface } from 'src/app/shared/interface/tache';
import { Component, OnInit, Input } from '@angular/core';
import { ProjetService } from 'src/app/shared/services/projetservice';
import { ProjetInterface } from 'src/app/shared/interface/projet';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TacheService } from 'src/app/shared/services/tacheservice';
import { mergeMap } from 'rxjs/operators';


@Component({
  selector: 'app-taches-list-projet',
  templateUrl: './taches-list-projet.component.html',
  styleUrls: ['./taches-list-projet.component.scss']
})
export class TachesListProjetComponent implements OnInit {

  public taches: Array< TacheInterface >;
  projet: ProjetInterface={};
  public subscription: Subscription;
//TODO gérer <app listTacheProjet [projet] = "{id: '', titre: ''}">

constructor(
  private projetService: ProjetService,
  private route: ActivatedRoute,
  private tacheService: TacheService
  ) { }

  ngOnInit() {
    this.getRemote();
    this.subscription = this.tacheService.tacheBehaviorSubject.subscribe(()=>{
      this.getRemote()});




  }
  public getRemote() {
    this.route.url.subscribe(()=> {
      this.projet.id= +this.route.snapshot.paramMap.get('id');
      this.projet.titre=this.route.snapshot.paramMap.get('titre');
      this.projetService.getRemoteTachesProjet(this.projet.id).subscribe((resultat) => {
        this.taches = resultat;

        //this.subscription=this.tacheService.tacheBehaviorSubject.subscribe();



      });
    })




  }

}
