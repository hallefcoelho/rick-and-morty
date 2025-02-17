import { ApiCharacter, CustomCharacter } from './character.interface';

export interface CharacterMapper {
  transform(characters: ApiCharacter[]): CustomCharacter[];
}
