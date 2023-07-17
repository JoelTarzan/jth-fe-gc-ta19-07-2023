import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { HomeComponent } from './components/main/home/home.component';
import { CharactersComponent } from './components/main/characters/characters.component';
import { AboutComponent } from './components/main/about/about.component';
import { DetailsComponent } from './components/main/details/details.component';
import { CreateCharacterComponent } from './components/main/create-character/create-character.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'characters',
    component: CharactersComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'create',
    component: CreateCharacterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
