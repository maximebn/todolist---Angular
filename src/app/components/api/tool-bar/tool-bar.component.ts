import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/shared/services/theme.service';

@Component ({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})

export class ToolBarComponent implements OnInit {

   // Injection du themeService dans le constructeur (service de changement de thème et sauvegarde en local storage)
   constructor(private themeService: ThemeService) {
  }

  // Initialisation : véfication et chargement du thème en local Storage sinon thème par défaut :
  ngOnInit() {
    if (!localStorage.length) {
      this.themeService.changeToOrangeTheme();
    }
    this.themeService.updateTheme();
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

}

  // ----------------------------------------------------------- //
