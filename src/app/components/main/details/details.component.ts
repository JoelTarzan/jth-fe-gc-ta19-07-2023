import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/models/character.model';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id: number = 1;
  character: Character = new Character();

  constructor(
    private activatedRoute: ActivatedRoute, 
    private charactersService: CharactersService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });

    this.charactersService.getById(this.id).subscribe(result => {
      this.character = result;
    });
  }
}