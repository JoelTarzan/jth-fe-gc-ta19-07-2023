import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../models/character.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  endpoint: string = 'http://localhost:3000/characters/';

  constructor(private http: HttpClient) {
  }

  // Devuelve todos los personajes
  getAll(): Observable<Character[]> {
    return this.http.get<Character[]>(this.endpoint);
  }

  // Devuelve un personaje buscandolo por Id
  getById(id: number): Observable<Character> {
    return this.http.get<Character>(this.endpoint + id);
  }

  // Crea un nuevo personaje
  create(character: Character): Observable<any> {
    return this.http.post(this.endpoint, character);
  }

  // Edita un personaje
  update(id: number, character: Character): Observable<any> {
    return this.http.put(this.endpoint + id, character);
  }

  // Elimina un personaje
  delete(id: number): Observable<any> {
    return this.http.delete(this.endpoint + id);
  }

  // Busca personajes por el nombre
  findByName(name: string): Observable<Character[]> {
    return this.http.get<Character[]>(this.endpoint + '?name=' + name);
  }
}