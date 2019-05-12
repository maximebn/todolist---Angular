import { RequestService } from 'src/app/shared/services/request.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  constructor(private requestService: RequestService) {}


  // On init, I have to know on which page I must redirect depending on the connexion : 
  ngOnInit() {
      this.requestService.checkCredentials();
  }

}
