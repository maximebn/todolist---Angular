import { TacheService } from "./../../../shared/services/tacheservice";
import { ProjetService } from "src/app/shared/services/projetservice";
import { TacheInterface } from "src/app/shared/interface/tache";
import { FormControl, FormGroup } from "@angular/forms";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ProjetInterface } from "src/app/shared/interface/projet";
import * as moment from "moment";
import { PARAMETERS } from "@angular/core/src/util/decorators";

@Component({
  selector: "app-adding-task-outside-dialog",
  templateUrl: "./adding-task-outside-dialog.component.html",
  styleUrls: ["./adding-task-outside-dialog.component.scss"]
})
export class AddingTaskOutsideDialogComponent implements OnInit {
  @Input() tache: TacheInterface;
  @Output() ajoutTacheEvent = new EventEmitter<boolean>();
  @Input() params: any;
  wasSent = false;

  titreSaisi: FormControl;
  date: FormControl;
  priorite: FormControl;
  statut: FormControl;
  projetSaisi: FormControl;
  tacheForm: FormGroup;
  projets: Array<ProjetInterface>;

  constructor(
    private projetService: ProjetService,
    private tacheService: TacheService
  ) {}

  ngOnInit() {
    this.tacheForm = new FormGroup({});
    this.projetService
      .getRemoteProjets()
      .subscribe(result => (this.projets = result));

    if (this.params.update) {
      this.titreSaisi = new FormControl(this.params.placeholder);
      this.date = new FormControl(this.params.date);

      this.priorite = new FormControl(this.params.priorite);
      this.statut = new FormControl(this.tache.statut);
      this.projetSaisi = new FormControl(this.params.projet);
    } else {
      this.titreSaisi = new FormControl();
      this.date = new FormControl(this.params.date);
      this.priorite = new FormControl("Normale");
      this.statut = new FormControl();
      this.projetSaisi = new FormControl();
    }
  }

  toggle() {
    this.wasSent = true;
    this.ajoutTacheEvent.emit(this.wasSent);
  }

  public save(): void {
    console.log(this.date.value);

    this.tache = {};
    this.tache.titre = this.titreSaisi.value;
    if (this.date.value != this.params.date) {
      const formDate: string = this.date.value;

      // Convertir la date 'chaîne' en date 'date'
      const momentDate: moment.Moment = moment(formDate, "DD/MM/YYYY");
      this.tache.date = momentDate.format("YYYY-MM-DD");
    } else {
      this.tache.date = this.date.value;
    }
    this.tache.priorite = this.priorite.value;
    this.tache.statut = "";
    this.tache.id = "";
    let projetJson: ProjetInterface = {};
    if (this.projetSaisi.value == null) {
      if (this.params.projet.id === 0) {
        projetJson.id = this.projets[0].id;
        projetJson.titre = this.projets[0].titre;
      } else {
        projetJson.id = this.params.projet.id;
        projetJson.titre = this.params.projet.titre;
      }
    } else {
      projetJson.id = this.projetSaisi.value.id;

      projetJson.titre = this.projetSaisi.value.titre;
    }
    this.tache.projet = projetJson;
    this.tacheService.addTask(this.tache).subscribe(resultat => {
      this.tache = resultat;
      this.tacheService.remplaceTacheSubject(this.tache);
    });

    this.wasSent = true;
    this.ajoutTacheEvent.emit(this.wasSent);

    // remttre le formuaire a vide
    this.titreSaisi = new FormControl();
      this.date = new FormControl(this.params.date);
      this.priorite = new FormControl("Normale");
      this.statut = new FormControl();
      this.projetSaisi = new FormControl();
  }

  public update(tache: TacheInterface) {
    let tacheJson: TacheInterface = {};
    tacheJson.titre = this.titreSaisi.value;
    if (this.date.value != this.params.date) {
      const formDate: string = this.date.value;

      // Convertir la date 'chaîne' en date 'date'
      const momentDate: moment.Moment = moment(formDate, "DD/MM/YYYY");
      tacheJson.date = momentDate.format("YYYY-MM-DD");
    } else {
      tacheJson.date = this.date.value;
    }

    console.log(this.params.date);
    console.log(this.date.value);
    tacheJson.priorite = this.priorite.value;
    tacheJson.statut = tache.statut;
    tacheJson.id = tache.id;

    let projetJson: ProjetInterface = {};
    projetJson.id = this.projetSaisi.value.id;
    projetJson.titre = this.projetSaisi.value.titre;
    tacheJson.projet = projetJson;

    this.tacheService.updateTache(tacheJson).subscribe();
    this.tacheService.remplaceTacheSubject(tacheJson);
  }
}
