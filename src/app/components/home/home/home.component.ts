import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from './../../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RegisterDialogComponent } from '../register-dialog/register-dialog.component';
import { User } from 'src/app/shared/models/user';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { RequestService } from 'src/app/shared/services/request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  private prenom: string;
  private mail: string;
  private password: string;

  // Service injection
  constructor(public dialog: MatDialog, private userService: UserService,
              private requestService: RequestService, private snackBar: MatSnackBar) {
  }

  // Where I redirect on connection
  ngOnInit() {
     this.requestService.checkCredentials();
  }

  // ------------------------------------------------------------------------------ //
  // Dialog for creating account
  openDialog(): void {
    const dialogRef = this.dialog.open(RegisterDialogComponent, {
      width: '350px',
      height: '500px',
      data: {prenom: this.prenom, mail: this.mail, password: this.password}
      });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

      const nouvelUtilisateur: User = new User().deserialize(result);
      console.log(nouvelUtilisateur);
      this.userService.addUser(nouvelUtilisateur).subscribe(data =>
        this.snackBar.open('Votre compte vient d\'être créé. Vous pouvez désormais vous connecter pour accéder à ToDoList !', 'Fermer'));
    }
    });

  }

  // ------------------------------------------------------------------------------ //
  // Dialog for login :
  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '350px',
      height: '450px',
      data: {mail: this.mail, password: this.password}
      });

    dialogRef.afterClosed().subscribe(result => {
      const logUtilisateur: User = new User().deserialize(result);
      console.log(logUtilisateur);

      // I ask for token
      this.requestService.obtainAccessToken(logUtilisateur);
      },
      error => {  {
        this.snackBar.open('Aie !', 'Fermer');
      }}
    );

}
}
