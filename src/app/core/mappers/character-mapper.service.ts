import { Injectable } from '@angular/core';
import { ApiCharacter, CustomCharacter } from '../interfaces/character.interface';
import { CharacterMapper } from '../interfaces/character-mapper.interface';

@Injectable({
  providedIn: 'root',
})
export class CharacterMapperService implements CharacterMapper {
  transform(characters: ApiCharacter[]): CustomCharacter[] {
    return characters.map((char: ApiCharacter) => ({
      Id: char.id,
      Name: char.name,
      Status: char.status,
      Image: char.image,
      Gender: char.gender,
    }));
  }
}
