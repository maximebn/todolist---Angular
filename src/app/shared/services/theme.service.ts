import { Injectable } from '@angular/core';

// ------------------------------------------------ //
export const OrangeTheme = {
  'background-color': 'rgb(255, 144, 40)',
};

export const PurpleTheme = {
  'background-color': 'rgb(133, 45, 74)',
};

export const GreenTheme = {
  'background-color': 'rgb(24, 108, 114)',
};
// ------------------------------------------------ //



@Injectable({ providedIn: 'root' })
export class ThemeService {


  // ----------------------------------------------------------------- //
  // Orange Theme :

  changeToOrangeTheme() {
    localStorage.setItem('activeTheme', JSON.stringify(OrangeTheme));
  }

  public isOrangeTheme(): boolean {
    let isTheme = false;
    if (localStorage.getItem('activeTheme') === JSON.stringify(OrangeTheme)) {
      isTheme = true;
    }
    return isTheme;
  }

  // ----------------------------------------------------------------- //
  // Purple Theme :

  changeToPurpleTheme() {
    localStorage.setItem('activeTheme', JSON.stringify(PurpleTheme));
  }

  public isPurpleTheme(): boolean {
    let isTheme = false;
    if (localStorage.getItem('activeTheme') === JSON.stringify(PurpleTheme)) {
      isTheme = true;
    }
    return isTheme;
  }


  // ----------------------------------------------------------------- //
  // Green Theme :

  changeToGreenTheme() {
    localStorage.setItem('activeTheme', JSON.stringify(GreenTheme));
  }

  public isGreenTheme(): boolean {
    let isTheme = false;
    if (localStorage.getItem('activeTheme') === JSON.stringify(GreenTheme)) {
      isTheme = true;
    }
    return isTheme;
  }

  // --------------------------------------------------------------------- //
  // Upadating theme from local storage reading :
  updateTheme() {
    this.setTheme(JSON.parse(localStorage.getItem('activeTheme')));
  }

  // ----------------------------------------------------------------------//
  // Private setting theme method :
  private setTheme(theme: {}) {
    Object.keys(theme).forEach(k =>
      document.documentElement.style.setProperty(`--${k}`, theme[k])
    );
  }
}
