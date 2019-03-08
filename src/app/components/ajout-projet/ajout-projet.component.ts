import { ProjetInterface } from './../../shared/interface/projet';
import { ProjetService } from './../../shared/services/projetservice';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ajout-projet',
  templateUrl: './ajout-projet.component.html',
  styleUrls: ['./ajout-projet.component.scss'],

})
export class AjoutProjetComponent implements OnInit {

public projet: ProjetInterface = {};
titreSaisi = new FormControl();
public projetForm: FormGroup;
step :number;
public projets : Array<ProjetInterface>;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }


  constructor(
    public projetService: ProjetService

  ) { }

  ngOnInit() {
      this.projetForm = new FormGroup({})

  }

  public save(){
    this.projet.id = '';
    this.projet.titre = this.titreSaisi.value;
    //recuperer la liste actuelle de projets
    this.projetService.behaviorSubject.subscribe((resultat) => {
      this.projets = resultat;
    })
    this.projetService.saveProjetRemote(this.projet).subscribe(//set l'id renvoyé par le back
      (resultat)=> {
        this.projet = resultat;
        this.projets.push(this.projet);//ajout du projet avec id à la liste récupérée
        this.projetService.remplaceSubject(this.projets);
      }
    );
  }

}
