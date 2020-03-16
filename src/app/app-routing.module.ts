import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PlanetaListComponent } from './planeta/planeta.component';
import { PersonaListComponent } from './persona/persona.component';
import { PersonaClickListComponent } from './personaclick/personaclick.component';
import { PlanetaClickListComponent } from './planetaclick/planetaclick.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
//2620032 ext 0
//2620906 ext 131
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] },
  { path: 'planeta-list', component: PlanetaListComponent,canActivate:[AuthGaurdService] },
  { path: 'persona-list', component: PersonaListComponent,canActivate:[AuthGaurdService] },
  { path: 'persona-click-list', component: PersonaClickListComponent,canActivate:[AuthGaurdService] },
  { path: 'planeta-click-list', component: PlanetaClickListComponent,canActivate:[AuthGaurdService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
