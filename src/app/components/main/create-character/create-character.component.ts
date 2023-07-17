import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from 'src/app/models/character.model';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent {

  character: Character = new Character();

  constructor(
    private charactersService: CharactersService, 
    private router:  Router) {

  }

  create(): void {
    this.charactersService.create(this.character).subscribe();
    this.router.navigateByUrl('/characters');
  }

}
