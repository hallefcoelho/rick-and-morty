import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { DropdownComponent } from '../../../shared/components/dropdown/dropdown.component';
import { CardComponent } from '../../../shared/components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { Subject, takeUntil } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { TranslateStatusPipe } from '../../../core/custom-pipe/translate-status.pipe';
import { CharacterAbstract } from '../../../core/abstract/character.abstract';
import { CharacterService } from '../../../core/service/characters.service';
import { CustomCharacter } from '../../../core/interfaces/character.interface';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [DropdownComponent, CardComponent, HttpClientModule, TranslateStatusPipe, AsyncPipe],
  providers: [
    { provide: CharacterAbstract, useClass: CharacterService }
  ],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss'
})
export class CharactersComponent implements OnInit, OnDestroy {
  characters = signal<CustomCharacter[]>([]);

  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private charactersService: CharacterAbstract){}

  ngOnInit(): void {
    this.getCharacters();
  }

  ngOnDestroy(): void {
      this.unsubscribe$.next();
      this.unsubscribe$.complete();
  }

  getCharacters() {
    this.charactersService.getAll().pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe({
      next: (characters: CustomCharacter[]) => {
        this.characters.set(characters);
      }
    });
  }
}
