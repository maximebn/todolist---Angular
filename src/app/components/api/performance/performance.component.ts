import { TacheService } from './../../../shared/services/tacheservice';
import { UserService } from 'src/app/shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TacheInterface } from 'src/app/shared/interface/tache';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})

export class PerformanceComponent implements OnInit {
  indicePerformance: number;
  nbreTachesEffectuees: number;
  nbreTachesEnRetard: number;
  doIshow: boolean;
  subscription: Subscription;
  taches: Array<TacheInterface>;

  constructor(private userService: UserService, private tacheService: TacheService) {
  }

  ngOnInit() {
    this.userService.getPerformance().subscribe(result => {
      this.nbreTachesEffectuees = result.nbreTachesEffectuees;
      this.nbreTachesEnRetard = result.nbreTachesEnRetard;
      this.indicePerformance = result.indicePerformance;
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
