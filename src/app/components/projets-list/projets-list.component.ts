import { MatDialog } from '@angular/material/dialog';
import { EffacerDialogComponentComponent } from './effacer-dialog-component/effacer-dialog-component.component';
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
  public projet: ProjetInterface = {};



  constructor(private projetService: ProjetService, private dialog: MatDialog) {}

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

  public receiveUpdate($event) {
    this.doIshow = !$event;
  }

  public toggle() {
    this.doIshow = !this.doIshow;
  }

  public toggleProjects() {
    this.doIshowProjects = !this.doIshowProjects;
 }

  public openDialogueDelete(projet): void {
      const dialogRef = this.dialog.open(EffacerDialogComponentComponent, {
        width: '350px',
        height: '200px',
        data: projet});
    }
}
