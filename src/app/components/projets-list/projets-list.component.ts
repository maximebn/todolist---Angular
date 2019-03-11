import { ProjetService } from './../../shared/services/projetservice';
import { Component, OnInit } from '@angular/core';
import { ProjetInterface } from 'src/app/shared/interface/projet';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projets-list',
  templateUrl: './projets-list.component.html',
  styleUrls: ['./projets-list.component.scss']
})
export class ProjetsListComponent implements OnInit {

  public projets: Array<ProjetInterface>;
  public subscription: Subscription;
  public doIshow;
  public doIshowProjects;

  constructor(private projetService: ProjetService) {}

  ngOnInit() {
    this.getRemote();
    this.subscription = this.projetService.behaviorSubject.subscribe((resultat)=>{
      this.projets = resultat;
    }
    );

  }

  public getRemote() {
    this.projetService.getRemoteProjets().subscribe((resultat) => {
      this.projets = resultat;
      this.projetService.remplaceSubject(this.projets);
    });
  }

   public toggle() {
     this.doIshow = !this.doIshow;
    }

    public toggleProjects() {
      this.doIshowProjects = !this.doIshowProjects;
     }

}
