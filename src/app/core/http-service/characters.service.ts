import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { CharacterAbstract } from '../abstract/character.abstract';
import { environment } from '../../../environments/environment.development';
import { CharacterMapperService } from '../mappers/character-mapper.service';
import { CharacterMapper } from '../interfaces/character-mapper.interface';
import { CustomCharacter } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class CharacterService implements CharacterAbstract {
  private apiUrl = `${environment.apiUrl}/character`;

  constructor(private http: HttpClient, @Inject(CharacterMapperService) private characterMapper: CharacterMapper) {}

  getCharacters(): Observable<CustomCharacter[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((characters) => this.characterMapper.transform(characters.results))
    );
  }
}
