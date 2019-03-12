import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from './../../../shared/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ThemeService } from 'src/app/shared/services/theme.service';
import { AddingTaskComponent } from 'src/app/components/api/adding-task/adding-task.component';
import { RequestService } from 'src/app/shared/services/request.service';
import { UnsubscribeDialogComponent } from '../unsubscribe-dialog/unsubscribe-dialog.component';
import { Router } from '@angular/router';
import { ProjetInterface } from 'src/app/shared/interface/projet';
import { ProjetService } from 'src/app/shared/services/projetservice';
import { Subscription } from 'rxjs';

@Component ({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss'],
})

export class ToolBarComponent implements OnInit {

  public projets: Array<ProjetInterface>;
  public subscription :Subscription;

   // Injection du themeService dans le constructeur (service de changement de thème et sauvegarde en local storage)
   constructor(private themeService: ThemeService,
              private projetService:  ProjetService,
     private requestService: RequestService, private router: Router,
               private dialog: MatDialog, private userService: UserService, private snackBar: MatSnackBar, public dialogue: MatDialog) {
  }

  // Initialisation : véfication et chargement du thème en local Storage sinon thème par défaut :
  ngOnInit() {
    if (!localStorage.length) {
      this.themeService.changeToOrangeTheme();
    }
    this.themeService.updateTheme();
    this.getRemote();
    this.subscription = this.projetService.behaviorSubject.subscribe((resultat)=>{
      this.projets = resultat;
    });
  }

    openDialog(projets: Array<ProjetInterface>): void {
      const dialogRef = this.dialog.open(AddingTaskComponent, {
        width: '700px',
        height: '285px',
        data: projets})
      }
     
  // ----------------------------------------------------------- //
  // Log-out :

  public logout(): void {
    this.requestService.logout();
  }

   // ----------------------------------------------------------- //
  // Unsubscribe :

  public unsubscribe(): void {
    const dialogRef = this.dialog.open(UnsubscribeDialogComponent, {
      width: '700px',
      height: '420px'});
  }





  // ----------------------------------------------------------- //
  // Méthodes de changement du thème de couleur :

  public changeToOrangeTheme(): void {
    if (!this.themeService.isOrangeTheme()) {
      this.themeService.changeToOrangeTheme();
      this.themeService.updateTheme();
    }
  }

  public changeToPurpleTheme(): void {
    if (!this.themeService.isPurpleTheme()) {
      this.themeService.changeToPurpleTheme();
      this.themeService.updateTheme();
    }
  }

  public changeToGreenTheme(): void {
    if (!this.themeService.isGreenTheme()) {
      this.themeService.changeToGreenTheme();
      this.themeService.updateTheme();
    }
  }
  public getRemote() {
    this.projetService.getRemoteProjets().subscribe((resultat) => {
      this.projets = resultat;
      this.projetService.remplaceSubject(this.projets);
    });
  }

}

  // ----------------------------------------------------------- //
