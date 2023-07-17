import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { HomeComponent } from './components/main/home/home.component';
import { CharactersComponent } from './components/main/characters/characters.component';
import { AboutComponent } from './components/main/about/about.component';
import { DetailsComponent } from './components/main/details/details.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditCharacterComponent } from './components/main/edit-character/edit-character.component';
import { CreateCharacterComponent } from './components/main/create-character/create-character.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    CharactersComponent,
    AboutComponent,
    DetailsComponent,
    EditCharacterComponent,
    CreateCharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
