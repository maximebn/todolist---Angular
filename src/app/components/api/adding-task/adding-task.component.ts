import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { CreateTask } from 'src/app/shared/services/create.service';
import { TacheInterface } from 'src/app/shared/interface/tache';
import { MatDialogRef } from '@angular/material/dialog';

import * as moment from 'moment';

export interface Priorite {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-adding-task',
  templateUrl: './adding-task.component.html',
  styleUrls: ['./adding-task.component.scss']
})
export class AddingTaskComponent implements OnInit {
  tache :TacheInterface={};

  titreSaisi= new FormControl();
  date = new FormControl(new Date());
  priorite=new FormControl();
  statut=new FormControl();
  projet=new FormControl();

  tacheForm: FormGroup;

  //priorites: string[] = ['Normale', 'Importante', 'Prioritaire'];


  constructor(private creationTacheService : CreateTask, 
    public dialogRef: MatDialogRef<AddingTaskComponent>) {}


  ngOnInit() {
    this.tacheForm=new FormGroup({});
  }
  

  public save(): void {

    // Récupère la date depuis le formulaire
    const formDate: string = this.date.value;

    // Convertir la date 'chaîne' en date 'date'
    const momentDate: moment.Moment = moment(formDate, 'DD/MM/YYYY');

    this.tache.titre=this.titreSaisi.value;
    this.tache.date=momentDate.format("YYYY-MM-DD");
    this.tache.priorite=this.priorite.value;
    this.tache.statut='';
    this.tache.id='';
    this.tache.projet=this.projet.value;


    this.creationTacheService.addTask(this.tache).subscribe(() => console.log('ok'));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
