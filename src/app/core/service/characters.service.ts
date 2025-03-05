import { Inject, Injectable } from '@angular/core';
import { CharacterAbstract } from '../abstract/character.abstract';
import { environment } from '../../../environments/environment.development';
import { CharacterMapperService } from '../mappers/character-mapper.service';
import { CharacterMapper } from '../interfaces/character-mapper.interface';
import { CustomCharacter } from '../interfaces/character.interface';
import { BaseService } from '../abstract/base-service.abstract';
import { HttpService } from '../http-service/http-service';

@Injectable()

export class CharacterService extends BaseService<CustomCharacter> implements CharacterAbstract {

  constructor(httpService: HttpService, @Inject(CharacterMapperService) characterMapper: CharacterMapper) {

    super(httpService.endpointCharacters, characterMapper.transform);
  }
}
