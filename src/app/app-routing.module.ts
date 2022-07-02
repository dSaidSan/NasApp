import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayApodComponent } from './components/display-apod/display-apod.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './Guards/AuthGuard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'Apod', component: DisplayApodComponent , canActivate: [AuthGuard]},
  { path: 'favoritos', component: FavoritosComponent , canActivate: [AuthGuard]},
  { path: 'otros', loadChildren: () => import('./otros/otros.module').then(m => m.OtrosModule), canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
