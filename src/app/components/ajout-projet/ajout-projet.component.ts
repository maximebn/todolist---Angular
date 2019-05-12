import { ProjetInterface } from './../../shared/interface/projet';
import { ProjetService } from './../../shared/services/projetservice';

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ajout-projet',
  templateUrl: './ajout-projet.component.html',
  styleUrls: ['./ajout-projet.component.scss'],

})

export class AjoutProjetComponent implements OnInit {

public titreSaisi = new FormControl('', Validators.minLength(1));
public projetForm: FormGroup;
public projets: Array<ProjetInterface>;
wasSent: boolean;

@Input() public projet: ProjetInterface = {};
@Input() params: any;// Modifier info et affichage composant  (ajouter ou modifier)
@Output() ajoutProjetEvent = new EventEmitter<boolean>();

  constructor(
    public projetService: ProjetService) { }

  ngOnInit() {
      this.projetForm = new FormGroup({});
}

// ****************************************************************************************
// Creating a new project

  public save(){
    this.projet= {};
    this.projet.id = '';
    this.projet.titre = this.titreSaisi.value;

    //I first want to reclaim the current projects list :
    this.projetService.behaviorSubject.subscribe((resultat) => {
      this.projets = resultat;
    })

    this.projetService.saveProjetRemote(this.projet).subscribe(
      // I want to set the id given by back-end
      (resultat)=> {
        this.projet = resultat;

        // Then, I add the project to the reclaimed list
        this.projets.push(this.projet);
        this.projetService.remplaceSubject(this.projets);
      }
    );

    this.wasSent = true;
    this.ajoutProjetEvent.emit(this.wasSent);
  }

// ****************************************************************************************
// Editing an existing project

  public update(projet: ProjetInterface){
    // this.projet={};
    // this.projet.id=projet.id;
    // this.projet.titre=this.titreSaisi.value;
    //this.projet.isUpdating = false;// Réafficher le projet et non le composant pr le modifier

    this.projetService.behaviorSubject.subscribe((resultat) => {
      this.projets = resultat;

    })

    // Finding the index in the projects list where the editing has to be done
    const index=this.projets.indexOf(projet);

    projet.isUpdating=false;
    projet.titre=this.titreSaisi.value;
    this.projetService.updateProjetRemote(projet).subscribe(
      ()=> {

        // I delete the previous project at the index I found
        this.projets.splice(index, 1, projet );
                                                
        // And I add the new one at this same index
        this.projetService.remplaceSubject(this.projets);
      }
    );
  }

  // ****************************************************************************************
  public doNothing(projet: ProjetInterface){
    projet.isUpdating=false;
  }

}
