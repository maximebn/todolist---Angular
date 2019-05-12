import { MatSnackBar } from '@angular/material/snack-bar';
import { RequestService } from './../../../shared/services/request.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unsubscribe-dialog',
  templateUrl: './unsubscribe-dialog.component.html',
  styleUrls: ['./unsubscribe-dialog.component.scss']
})
export class UnsubscribeDialogComponent implements OnInit {
  disabled = false;


  constructor(private dialogRef: MatDialogRef<UnsubscribeDialogComponent>, private snackBar: MatSnackBar,
              private userService: UserService, private requestService: RequestService) {}

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onValidateDeleting(): void {
    this.userService.deleteUser().subscribe((data) => {
      this.dialogRef.close();
      this.requestService.logout();
      this.snackBar.open('Votre compte a bien été supprimé. Bon vent.', 'Fermer');
     }
    );

  }

}
