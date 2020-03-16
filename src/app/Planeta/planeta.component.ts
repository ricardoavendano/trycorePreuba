
import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from "../service/authentication.service";
import { PlanetaResponse } from './planetaresponse';
@Component({
  selector: 'app-libro',
  templateUrl: './planeta.component.html',
  styleUrls: ['./planeta.component.css']
})
export class PlanetaListComponent implements OnInit {

  Planetas: any = [];
  Personas: any = [];

  constructor(public restApi: AuthenticationService) { }
  ngOnInit() {
    this.loadPlanetas();
  }
  loadPlanetas() {
    return this.restApi.getPlanetas().subscribe((data: {}) => {
      this.Planetas = data;
    });
  }

  agregarRegistroPlaneta(idPlaneta:number, name:string) {
    const planetaResponse = new PlanetaResponse();
    planetaResponse.idPlaneta = idPlaneta;
    planetaResponse.name = name;
    planetaResponse.contador = 0;

    this.restApi.getPersonasPorPlaneta(idPlaneta).subscribe((data: {}) => {
      this.Personas = data;
    });

    if (window.confirm('Registrar Planeta ')){
      this.restApi.agregarRegistroPlaneta(planetaResponse).subscribe(data => {})
    }
  }  

}
