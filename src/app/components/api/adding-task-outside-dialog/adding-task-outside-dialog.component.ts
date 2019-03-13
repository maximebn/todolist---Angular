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
}
