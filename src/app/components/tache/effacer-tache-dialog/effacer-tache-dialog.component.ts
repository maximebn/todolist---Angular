import { TacheService } from './../../../shared/services/tacheservice';
import { TacheInterface } from './../../../shared/interface/tache';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';


@Component({
  selector: 'app-effacer-tache-dialog',
  templateUrl: './effacer-tache-dialog.component.html',
  styleUrls: ['./effacer-tache-dialog.component.scss']
})
export class EffacerTacheDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<EffacerTacheDialogComponent>,
    private tacheService: TacheService,
    @Inject(MAT_DIALOG_DATA) public tache: TacheInterface) { }

  ngOnInit() {
  }
  public validateDeletingTache(tache: TacheInterface): void {
    this.tacheService.deleteOne(tache).subscribe();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
