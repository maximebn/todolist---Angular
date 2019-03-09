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

 
  constructor(private projetService: ProjetService) {}

  ngOnInit() {
    this.getRemote();
    this.subscription = this.projetService.behaviorSubject.subscribe((resultat)=>{
      this.projets = resultat;
      this.projets.forEach(projet => {
        projet.isUpdating=false;
        
      });
    }
    );
    

  }

  public getRemote() {
    this.projetService.getRemoteProjets().subscribe((resultat) => {
      this.projets = resultat;
      this.projetService.remplaceSubject(this.projets);
    });
  }

  public showUpdate(projet: ProjetInterface){
    projet.isUpdating=true;
    
  }

  

}
