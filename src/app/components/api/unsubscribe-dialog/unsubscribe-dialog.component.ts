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


  constructor(private dialogRef: MatDialogRef<UnsubscribeDialogComponent>, private userService: UserService, private router: Router) {
     }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onValidateDeleting(): void {
    this.userService.deleteUser();
    this.dialogRef.close();
    this.router.navigate(['']);

  }

}
