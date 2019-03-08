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




  constructor() { }

  ngOnInit() {


  }

}
