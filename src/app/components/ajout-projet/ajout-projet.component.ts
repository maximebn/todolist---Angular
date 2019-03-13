import { ProjetInterface } from './../../shared/interface/projet';
import { ProjetService } from './../../shared/services/projetservice';

import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-ajout-projet',
  templateUrl: './ajout-projet.component.html',
  styleUrls: ['./ajout-projet.component.scss'],

})
export class AjoutProjetComponent implements OnInit {


@Input() public projet: ProjetInterface = {};
public titreSaisi = new FormControl('', Validators.required);
public projetForm: FormGroup;
public projets: Array<ProjetInterface>;
@Input() params: any;// Modifier info et affichage composant  (ajouter ou modifier)


  constructor(
    public projetService: ProjetService

  ) { }

  ngOnInit() {
      this.projetForm = new FormGroup({});


  }
// Créer un nouveau projet
  public save(){
    this.projet= {};
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

  //Modifier un projet existant
  public update(projet: ProjetInterface){
    // this.projet={};
    // this.projet.id=projet.id;
    // this.projet.titre=this.titreSaisi.value;
    //this.projet.isUpdating = false;// Réafficher le projet et non le composant pr le modifier


    this.projetService.behaviorSubject.subscribe((resultat) => {
      this.projets = resultat;

    })
    const index=this.projets.indexOf(projet);// Trouver l'index dans le tableau projets où l'on doit fr la modif

    projet.isUpdating=false;
    projet.titre=this.titreSaisi.value;
    this.projetService.updateProjetRemote(projet).subscribe(
      ()=> {

        this.projets.splice(index, 1, projet );//suppression de l'ancien projet à l'index recuperé
                                                // et ajout du nouveau projet à cet index
        this.projetService.remplaceSubject(this.projets);
      }
    );
  }

  public doNothing(projet: ProjetInterface){
    projet.isUpdating=false;
  }

}
