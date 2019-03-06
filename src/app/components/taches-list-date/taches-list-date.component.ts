
import { Component, OnInit,Input } from '@angular/core';
import { TacheInterface } from 'src/app/shared/interface/tache';
import { TacheService } from 'src/app/shared/services/tacheservice';
import* as moment from 'moment'

@Component({
  selector: 'app-taches-list-date',
  templateUrl: './taches-list-date.component.html',
  styleUrls: ['./taches-list-date.component.scss']
})
export class TachesListDateComponent implements OnInit {
  public taches: Array<TacheInterface>;
  @Input() page:string;
 


  constructor(
    private tacheService: TacheService
  ) { }

  ngOnInit() {
    this.getRemote(this.page);
  }
  
  public getRemote(page?: string ){
    
  
    this.tacheService.getRemoteTaches(this.page).subscribe((resultat)=>{
    console.log(resultat);
    this.taches = resultat
    
    })

  }
}

