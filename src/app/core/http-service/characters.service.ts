import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharacterAbstract } from '../abstract/character.abstract';
import { environment } from '../../../environments/environment.development';
import { CharacterMapperService } from '../mappers/character-mapper.service';
import { CharacterMapper } from '../interfaces/character-mapper.interface';
import { CustomCharacter } from '../interfaces/character.interface';
import { BaseService } from '../abstract/base-service.abstract';

@Injectable({
  providedIn: 'root',
})

export class CharacterService extends BaseService<CustomCharacter> implements CharacterAbstract {

  constructor(protected override http: HttpClient, @Inject(CharacterMapperService) characterMapper: CharacterMapper) {

    super(`${environment.apiUrl}/character`, characterMapper.transform);
  }
}
