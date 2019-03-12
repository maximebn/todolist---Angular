import { UserService } from 'src/app/shared/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})
export class PerformanceComponent {
  indicePerformance: number;
  nbreTachesEffectuees: number;
  nbreTachesEnRetard: number;
  doIshow: boolean;

  constructor(private userService: UserService) {
    this.userService.getPerformance().subscribe(result => {
      this.nbreTachesEffectuees = result.nbreTachesEffectuees;
      this.nbreTachesEnRetard = result.nbreTachesEnRetard;
      this.indicePerformance = result.indicePerformance;
      console.log(this.indicePerformance);
      });
  }

  public isWorking() {
    this.doIshow = true;
    if ((this.nbreTachesEffectuees + this.nbreTachesEnRetard) === 0) {
      this.doIshow = false;
    }
    return this.doIshow;
  }

}
