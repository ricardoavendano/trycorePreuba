
import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from "../service/authentication.service";
import { PersonaResponse } from "./PersonaResponse";
@Component({
  selector: 'app-libro',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaListComponent implements OnInit {

  Personas: any = [];
  Planetas: any = [];
  constructor(public restApi: AuthenticationService) { }
  ngOnInit() {
    this.loadPersonas();
  }
  
  loadPersonas() {
    return this.restApi.getPersonas().subscribe((data: {}) => {
      this.Personas = data;
    });
  }

  agregarRegistroPersona(idPersona:number, idPlaneta:number, name:string) {
    const personaResponse = new PersonaResponse();
    personaResponse.idPersona = idPersona;
    personaResponse.idPlaneta = idPlaneta;
    personaResponse.name = name;
    personaResponse.contador = 0;

    this.restApi.getPlanetaPorPersona(idPersona).subscribe((data: {}) => {
      this.Planetas = data;
    });

    if (window.confirm('Registrar Persona ')){
      this.restApi.agregarRegistroPersona(personaResponse).subscribe(data => {})
    }
  }  


}
