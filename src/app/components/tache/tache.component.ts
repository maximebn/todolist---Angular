import { Component, OnInit, Input } from '@angular/core';
import { TacheInterface } from 'src/app/shared/interface/tache';
import * as moment from 'moment';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.scss']
})
export class TacheComponent implements OnInit {
  @Input() tache : TacheInterface;

//public tache: TacheInterface;
titre = 'une tache';
    date = moment();
    titreP = 'maison';
    statut= 'en cours';
    priorite= 'non';
    id = 2;

  constructor() { }

  ngOnInit() {


  }

}
