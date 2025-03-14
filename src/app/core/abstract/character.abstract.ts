import { Observable } from "rxjs";
import { CustomCharacter } from "../interfaces/character.interface";

export abstract class CharacterAbstract {
  abstract getAll(): Observable<CustomCharacter[]>;
}
