import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from "../service/authentication.service";
@Component({
  selector: 'app-libro',
  templateUrl: './personaclick.component.html',
  styleUrls: ['./personaclick.component.css']
})
export class PersonaClickListComponent implements OnInit {

  PersonasClick: any = [];
  constructor(public restApi: AuthenticationService) { }
  ngOnInit() {
    this.loadPersonasClick();
  }
  // Get employees list
  loadPersonasClick() {
    return this.restApi.getPersonasClick().subscribe((data: {}) => {
      this.PersonasClick = data;
    });
  }

}
