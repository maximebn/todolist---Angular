import { RequestService } from 'src/app/shared/services/request.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  constructor(private requestService: RequestService) {}


  // Afin de savoir vers quelle page diriger selon la connexion :
  ngOnInit() {
      this.requestService.checkCredentials();
  }

}
