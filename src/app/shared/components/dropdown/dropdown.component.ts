import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  showMenu: boolean = false;

  toggleDropdown() {
    this.showMenu = !this.showMenu;
  }
}
