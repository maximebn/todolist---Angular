import { Component, OnInit, Input } from '@angular/core';
import { TacheInterface } from 'src/app/shared/interface/tache';
import * as moment from 'moment';
import { TacheService } from 'src/app/shared/services/tacheservice';
import { MatDialog } from '@angular/material/dialog';
import { EffacerTacheDialogComponent } from './effacer-tache-dialog/effacer-tache-dialog.component';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.scss']
})
export class TacheComponent implements OnInit {
  @Input() tache : TacheInterface;
  @Input() params:any;

  isCanceled: boolean;
  




  constructor( public tacheService : TacheService, private dialog: MatDialog) { }

  ngOnInit() {
    this.isCanceled = true;


  }

  public changeStatutEffectuee(tache: TacheInterface){
    tache.statut="Effectuée";
    this.tacheService.updateTache(tache).subscribe();
    this.tacheService.remplaceTacheSubject(tache);
  }

  public openDialogueDelete(tache): void {
    const dialogRef = this.dialog.open(EffacerTacheDialogComponent, {
      width: '350px',
      height: '160px',
      data: tache});
  }
  public showUpdate(tache: TacheInterface){
    tache.isUpdating=true;
    this.isCanceled=false;
  }

  receiveUpdate($event) {
     console.log($event);
     this.isCanceled = $event;

  }
}
