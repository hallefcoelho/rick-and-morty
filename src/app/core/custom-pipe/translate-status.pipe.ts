import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translateStatus',
  standalone: true
})
export class TranslateStatusPipe implements PipeTransform {

  transform(value: string): any {
    switch (value){
      case 'Alive':
        return 'Vivo';
      case 'Dead':
        return 'Morto';
      default:
        return 'Desconhecido'
    }
  }

}
