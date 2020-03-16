import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
  export class LoginComponent implements OnInit {

    /*idUsuario = ''
    password = ''*/
    invalidLogin = false

    @Input() loginDetails = { idUsuario: '', password: ''}
  
    constructor(public restApi: AuthenticationService, private router: Router,
      private loginservice: AuthenticationService, private httpClient: HttpClient) { }
  
    ngOnInit() {
      this.loadModelo();
    }

    loadModelo() {
      return this.restApi.getModelo().subscribe((data: {}) => {});
    }
  
    checkLogin(dataEmployee) {

      this.loginservice.authenticate(this.loginDetails).subscribe((data: {}) => {
        this.loginservice.sessionStorageValue(this.loginDetails.idUsuario);
        this.router.navigate(['planeta-list']);
        this.invalidLogin = false;
      })
      
    }

}
