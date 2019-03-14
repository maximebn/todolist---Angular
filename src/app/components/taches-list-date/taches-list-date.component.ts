import { AddingTaskOutsideDialogComponent } from './../api/adding-task-outside-dialog/adding-task-outside-dialog.component';
import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { TacheInterface } from 'src/app/shared/interface/tache';
import { TacheService } from 'src/app/shared/services/tacheservice';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-taches-list-date',
  templateUrl: './taches-list-date.component.html',
  styleUrls: ['./taches-list-date.component.scss']
})
export class TachesListDateComponent implements OnInit {
  public taches: Array<TacheInterface>=[{}];
  @Input() page: string;
  @Input() dates: Array<any>;

  public dateVide : string;

  public titre: string;
  public dateCliquee;
  public isCanceled;
  public subscription: Subscription;
  public tache: TacheInterface;

  panelOpenState: boolean;

  constructor(
    private tacheService: TacheService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.page = this.route.snapshot.data.page;
    console.log(this.page)
    //this.dates = this.route.snapshot.data.dates;
    this.titre = this.route.snapshot.data.title;

    this.subscription = this.tacheService.tacheBehaviorSubject.subscribe(()=>{
    this.getRemote(this.page)});
    console.log(this.subscription);
    this.isCanceled = true;
    this. dateVide =moment().locale('fr').format('YYYY-MM-DD');
  }

  public toggle(date: any) {
    this.dateCliquee = date;
    this.isCanceled = !this.isCanceled;
   }

  receiveUpdate($event) {
     console.log($event);
     this.isCanceled = $event;

  }

  public getRemote(page?: string ){
    this.tacheService.getRemoteTaches(this.page).subscribe((resultat) => {

    this.taches = resultat;
    this.dates = this.route.snapshot.data.dates;

    if (this.page === 'findAll') {
      this.dates = [];

      for(let i=0; i< this.taches.length; i++){
        let statut = this.taches[i].statut;
        if(statut !== 'En retard'){
        let date = this.taches[i].date;

        if (this.dates.indexOf(date) === -1){
            this.dates.push(date);
      }

     }
    }
  }
    });
  }
}

