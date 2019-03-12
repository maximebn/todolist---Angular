import { Component, OnInit, Input } from '@angular/core';
import { TacheInterface } from 'src/app/shared/interface/tache';
import * as moment from 'moment';
import { TacheService } from 'src/app/shared/services/tacheservice';


@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.scss']
})
export class TacheComponent implements OnInit {
  @Input() tache : TacheInterface;




  constructor( public tacheService : TacheService) { }

  ngOnInit() {


  }

  public changeStatutEffectuee(tache: TacheInterface){
    tache.statut="Effectuée";
    this.tacheService.updateTache(tache).subscribe();
  }

}
