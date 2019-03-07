import { ProjetService } from './../../shared/services/projetservice';
import { Component, OnInit } from '@angular/core';
import { ProjetInterface } from 'src/app/shared/interface/projet';

@Component({
  selector: 'app-projets-list',
  templateUrl: './projets-list.component.html',
  styleUrls: ['./projets-list.component.scss']
})
export class ProjetsListComponent implements OnInit {

  public projets: Array<ProjetInterface>;

  constructor(private projetService: ProjetService) {}

  ngOnInit() {
    this.projets= [{id: 1, titre: 'Coucou'}];
   // this.getRemote();
  }

  public getRemote() {
    this.projetService.getRemoteProjets().subscribe((resultat) => {
      this.projets = resultat;
    });
  }

}
