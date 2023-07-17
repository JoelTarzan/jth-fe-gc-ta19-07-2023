import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit{

  characters: Character[] = [];

  constructor(private characterService: CharactersService) {
  }

  ngOnInit(): void {
    this.characterService.getAll().subscribe(result => {
      this.characters = result;
    });
  }
}