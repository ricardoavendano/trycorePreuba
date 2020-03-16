
import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from "../service/authentication.service";
@Component({
  selector: 'app-libro',
  templateUrl: './planetaclick.component.html',
  styleUrls: ['./planetaclick.component.css']
})
export class PlanetaClickListComponent implements OnInit {

  PlanetasClick: any = [];
  constructor(public restApi: AuthenticationService) { }
  ngOnInit() {
    this.loadPlanetasClick();
  }
  // Get employees list
  loadPlanetasClick() {
    return this.restApi.getPlanetasClick().subscribe((data: {}) => {
      this.PlanetasClick = data;
    });
  }


}
