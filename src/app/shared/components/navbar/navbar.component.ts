import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @ViewChild('navbarMenu') navbarMenu!: ElementRef;
  @ViewChild('navbarButton') navbarButton!: ElementRef;

  lastScrollTop = 0;
  isIconVisible = true;
  selectedNavigation!: string;
  showMenu: boolean = false
  screenWidth!: number;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > this.lastScrollTop && this.showMenu === false) {
      this.isIconVisible = false;
    }
    else {
      this.isIconVisible = true;
    }
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent) {
    this.screenWidth = (event.target as Window).innerWidth;
    if(this.screenWidth > 550) {
      this.showMenu = false;
    }
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const clickedInsideMenu = this.navbarMenu?.nativeElement.contains(event.target);
    const clickedInsideButton = this.navbarButton?.nativeElement.contains(event.target);

    if (this.showMenu && clickedInsideMenu && !clickedInsideButton) {
      this.showMenu = false;
    }
  }

  getNavigationItem(event: string){
    this.selectedNavigation = event;
  }

  toggleNavbar() {
    this.showMenu = !this.showMenu;
  }
}
