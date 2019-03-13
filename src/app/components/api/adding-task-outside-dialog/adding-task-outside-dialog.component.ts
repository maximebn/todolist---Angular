import { TacheService } from './../../../shared/services/tacheservice';
import { ProjetService } from 'src/app/shared/services/projetservice';
import { TacheInterface } from 'src/app/shared/interface/tache';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProjetInterface } from 'src/app/shared/interface/projet';
import * as moment from 'moment';

@Component({
  selector: 'app-adding-task-outside-dialog',
  templateUrl: './adding-task-outside-dialog.component.html',
  styleUrls: ['./adding-task-outside-dialog.component.scss']
})
export class AddingTaskOutsideDialogComponent implements OnInit {
  @Input() tache: TacheInterface;
  @Output() ajoutTacheEvent = new EventEmitter<boolean>();
  @Input() params: any;
  wasSent = false;


  titreSaisi = new FormControl();
  date = new FormControl(new Date());
  priorite = new FormControl();
  statut = new FormControl();
  projetSaisi = new FormControl();
  tacheForm: FormGroup;
  projets: Array<ProjetInterface>;

  constructor(private projetService: ProjetService, private tacheService: TacheService) {}

  ngOnInit() {
    this.tacheForm = new FormGroup({});
    this.projetService.getRemoteProjets().subscribe( (result) => this.projets = result);
    console.log(this.projets);
  }

  toggle() {
    this.wasSent = true;
    this.ajoutTacheEvent.emit(this.wasSent);
  }

  public save(): void {

    // Récupère la date depuis le formulaire
    const formDate: string = this.date.value;

    // Convertir la date 'chaîne' en date 'date'
    const momentDate: moment.Moment = moment(formDate, 'DD/MM/YYYY');

    this.tache = {};
    this.tache.titre = this.titreSaisi.value;
    this.tache.date = momentDate.format('YYYY-MM-DD');
    this.tache.priorite = this.priorite.value;
    this.tache.statut = '';
    this.tache.id = '';
    let projetJson : ProjetInterface={};
    projetJson.id = this.projetSaisi.value.id;
    projetJson.titre = this.projetSaisi.value.titre;
    this.tache.projet = projetJson;

    this.tacheService.addTask(this.tache).subscribe(() => console.log('ok'));

    this.wasSent = true;
    this.ajoutTacheEvent.emit(this.wasSent);
  }
  public update(tache: TacheInterface) {
    let tacheJson: TacheInterface={}
    if(this.titreSaisi.value !== null){
      tacheJson.titre = this.titreSaisi.value;
    }
    else{
      tacheJson.titre=tache.titre;
    }
    const formDate: string = this.date.value;

    // Convertir la date 'chaîne' en date 'date'
    const momentDate: moment.Moment = moment(formDate, 'DD/MM/YYYY');
    tacheJson.date=momentDate.format("YYYY-MM-DD");
    if(this.priorite.value !== null){
      tacheJson.priorite = this.priorite.value;
    }else{
      tacheJson.priorite=tache.priorite;
    }
    tacheJson.statut=tache.statut;
    tacheJson.id=tache.id;


    let projetJson : ProjetInterface={};
    if(this.projetSaisi.value == null){

      projetJson.id = tache.projet.id
      projetJson.titre =  tache.projet.titre;
    } else{
     projetJson.id = this.projetSaisi.value.id;
     projetJson.titre = this.projetSaisi.value.titre;
    }
console.log(projetJson)
tacheJson.projet = projetJson;



console.log(tacheJson);
    this.tacheService.updateTache(tacheJson);


  }
}
