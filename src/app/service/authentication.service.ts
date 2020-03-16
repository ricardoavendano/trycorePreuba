import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user/user.model';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Planeta } from '../planeta/planeta';
import { Persona } from '../persona/persona';
import { PersonaClick } from '../personaClick/personaclick';
import { PlanetaClick } from '../planetaClick/planetaClick';

@Injectable({
    providedIn: 'root'
  })
  export class AuthenticationService {

    public data: any;
    backApiURL = 'http://localhost:8081/prueba';
    constructor(private http: HttpClient) {
    }

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }  

    authenticate(user): Observable<User> {
        return this.http.post<User>(this.backApiURL + '/login', JSON.stringify(user), this.httpOptions)
        .pipe(
          retry(0)
          //,catchError(this.handleError)
        )
        
      }

      getPlanetas(): Observable<Planeta> {
        return this.http.get<Planeta>(this.backApiURL+"/cargar/planeta")
        .pipe(
          retry(0)
          //,catchError(this.handleError)
        )
      }

      getPlanetasClick(): Observable<PlanetaClick> {
        return this.http.get<PlanetaClick>(this.backApiURL+"/cargar/planetaRS")
        .pipe(
          retry(0)
          //,catchError(this.handleError)
        )
      }

      getPersonas(): Observable<Persona> {
        return this.http.get<Persona>(this.backApiURL+"/cargar/persona")
        .pipe(
          retry(0)
          //,catchError(this.handleError)
        )
      }

      getModelo(): Observable<String> {
        return this.http.get<String>(this.backApiURL+"/cargar/modelo")
        .pipe(
          retry(0)
          //,catchError(this.handleError)
        )
      }

      getPersonasClick(): Observable<PersonaClick> {
        return this.http.get<PersonaClick>(this.backApiURL+"/cargar/personaRS")
        .pipe(
          retry(0)
          //,catchError(this.handleError)
        )
      }

      getPersonasPorPlaneta(idPlaneta): Observable<String> {
        return this.http.get<String>(this.backApiURL + "/cargar/planetaRS/" + idPlaneta)
        .pipe(
          retry(0)
          //,catchError(this.handleError)
        )
      }

      getPlanetaPorPersona(idPersona): Observable<String> {
        return this.http.get<String>(this.backApiURL + "/cargar/personaRS/" + idPersona)
        .pipe(
          retry(0)
          //,catchError(this.handleError)
        )
      }

      agregarRegistroPlaneta(planeta): Observable<String> {
        return this.http.post<String>(this.backApiURL + '/planeta/click', JSON.stringify(planeta), this.httpOptions)
        .pipe(
          retry(0)
          //,catchError(this.handleError)
        )
        
      }

      agregarRegistroPersona(persona): Observable<String> {
        return this.http.post<String>(this.backApiURL + '/persona/click', JSON.stringify(persona), this.httpOptions)
        .pipe(
          retry(0)
          //,catchError(this.handleError)
        )
        
      }
      
      handleError(error) {
        let errorMessage = '';
          if(error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
          } else {
            // Get server-side error
            
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          }
          window.alert(errorMessage);
          return throwError(errorMessage);
     }
  
    sessionStorageValue(idUsuario:string) {
      sessionStorage.setItem("idUsuario", idUsuario);
    }

    isUserLoggedIn() {
      let user = sessionStorage.getItem('idUsuario')
      console.log(!(user === null))
      return !(user === null)
    }
  
    logOut() {
      sessionStorage.removeItem('idUsuario')
    }
}