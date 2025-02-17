import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTypeWriter]',
  standalone: true
})
export class TypeWriterDirective implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.applyTypeWriterStyles();
    this.typeWriterEfect();
  }

  typeWriterEfect() {
    const getText = this.el.nativeElement.textContent;

    const textSplit = getText.split('');

    this.el.nativeElement.textContent = '';

    textSplit.forEach((item: string, line: number) => {
      setTimeout(() => {
        this.el.nativeElement.textContent += item;
      }, 100 * line);
    });
  }

  private applyTypeWriterStyles() {
    this.renderer.addClass(this.el.nativeElement, 'typewriter');
  }
}
