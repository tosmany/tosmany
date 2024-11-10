import { Component, ElementRef, Renderer2, ViewChild,ViewChildren,  QueryList, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-style-switcher',
  standalone: true,
  templateUrl: './style-switcher.component.html',
  styleUrls: ['./style-switcher.component.css']
})
export class StyleSwitcherComponent implements AfterViewInit {
  @ViewChild('styleSwitcher', { static: true }) styleSwitcher!: ElementRef;
  @ViewChild('styleSwitcherToggle', { static: true }) styleSwitcherToggle!: ElementRef;
   // Usamos ViewChildren para obtener todas las referencias de los elementos <link> con la clase 'alternate-style'
   @ViewChildren('alternateStyles') alternateStyles!: QueryList<ElementRef>;

  constructor(private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Toggle style switcher
      this.renderer.listen(this.styleSwitcherToggle.nativeElement, 'click', () => {
        this.styleSwitcher.nativeElement.classList.toggle('open');
      });

      // Hide style switcher on scroll
      window.addEventListener('scroll', () => {
        if (this.styleSwitcher.nativeElement.classList.contains('open')) {
          this.styleSwitcher.nativeElement.classList.remove('open');
        }
      });
    }
  }

  setActiveStyle(color: string): void {
    this.alternateStyles.forEach((styleRef: ElementRef) => {
      const styleElement = styleRef.nativeElement;
      const styleTitle = styleElement.getAttribute('title');

      if (color === styleTitle) {
        // Si el color seleccionado coincide con el título del archivo CSS, lo habilitamos
        this.renderer.removeAttribute(styleElement, 'disabled');
      } else {
        // Si no coincide, lo deshabilitamos
        this.renderer.setAttribute(styleElement, 'disabled', 'true');
      }
    });
  }
}
