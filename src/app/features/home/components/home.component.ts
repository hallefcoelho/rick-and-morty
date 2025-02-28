import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { TypeWriterDirective } from '../../../shared/directives/type-writer.directive';
import { DropdownComponent } from '../../../shared/components/dropdown/dropdown.component';
import { CardComponent } from '../../../shared/components/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TypeWriterDirective, DropdownComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit{
  @ViewChild('videoPlayer', { static: false }) videoPlayer!: ElementRef;
  @ViewChild('arrowDown', { static: false }) arrowDown!: ElementRef;
  @ViewChild('nextSection') nextSection!: ElementRef;

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    if (window.scrollY === 0) {
      this.arrowDown.nativeElement.style.opacity = 1;
      this.arrowDown.nativeElement.style.pointerEvents = 'auto';
    }
    else {
      this.arrowDown.nativeElement.style.opacity = 0;
      this.arrowDown.nativeElement.style.pointerEvents = 'none';
    }
  }

  ngAfterViewInit() {
    if (this.videoPlayer) {
      const video: HTMLVideoElement = this.videoPlayer.nativeElement;
      video.muted = true;
    }
  }

  scrollToNextSection() {
    this.nextSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
