import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { detectPlatform } from '../../../core/utils/device.util';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() urlImage: string = '';
  @Input() alt!: string;
  @Input() imageBackground: boolean = false;
  @Input() status: string = 'Desconhecido';

  constructor() {}

  convertStatusColor(status: string) {
    switch (status){
      case 'Alive':
        return 'green';
      case 'Dead':
        return 'red';
      default:
        return 'gray'
    }
  }
}
