import { ProjetInterface } from './../../../shared/interface/projet';
import { ProjetService } from 'src/app/shared/services/projetservice';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';


@Component({
  selector: 'app-effacer-dialog-component',
  templateUrl: './effacer-dialog-component.component.html',
  styleUrls: ['./effacer-dialog-component.component.scss']
})
export class EffacerDialogComponentComponent implements OnInit {



  constructor(private dialogRef: MatDialogRef<EffacerDialogComponentComponent>,
              private projetService: ProjetService,
              @Inject(MAT_DIALOG_DATA) public projet: ProjetInterface) { }

  ngOnInit() {

  }

  public validateDeletingProject(projet: ProjetInterface): void {
    this.projetService.deleteById(projet).subscribe((resultat) => {
      this.projetService.remplaceSubject(resultat);
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
