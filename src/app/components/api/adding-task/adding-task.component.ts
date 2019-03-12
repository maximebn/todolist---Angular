import { Component, OnInit, Input } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { CreateTask } from 'src/app/shared/services/create.service';
import { TacheInterface } from 'src/app/shared/interface/tache';

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
  @Input() tache :TacheInterface;

  titreSaisi= new FormControl();
  date = new FormControl(new Date());
  priorite=new FormControl();
  statut=new FormControl();
  projet=new FormControl();

  tacheForm: FormGroup;

  //priorites: string[] = ['Normale', 'Importante', 'Prioritaire'];



  constructor(private creationTacheService : CreateTask) { }

  ngOnInit() {
    this.tacheForm=new FormGroup({});
  }


  public save(): void {
    this.tache={};
    this.tache.titre=this.titreSaisi.value;
    this.tache.date=this.date.value;
    this.tache.priorite=this.priorite.value;
    this.tache.statut=this.statut.value;
    this.tache.id='';
    this.tache.projet=this.projet.value;


    this.creationTacheService.addTask(this.tache).subscribe();
  }

}
