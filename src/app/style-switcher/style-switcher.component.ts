import {
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
  ViewChildren,
  QueryList,
  AfterViewInit,
  Inject,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-style-switcher',
  standalone: true,
  templateUrl: './style-switcher.component.html',
  styleUrls: ['./style-switcher.component.css'],
})
export class StyleSwitcherComponent implements AfterViewInit {
  @ViewChild('styleSwitcher', { static: true }) styleSwitcher!: ElementRef;
  @ViewChild('styleSwitcherToggle', { static: true })
  styleSwitcherToggle!: ElementRef;
  isDark:boolean = false;




  // Usamos ViewChildren para obtener todas las referencias de los elementos <link> con la clase 'alternate-style'
  @ViewChildren('alternateStyles') alternateStyles!: QueryList<ElementRef>;
  // Usamriamos ViewChildre para obtener todas las referencias de los elementos <span> con la clase 'languages'
  @ViewChildren('languages') languages!: QueryList<ElementRef>;
  // Usamos ViewChild para obtener la referencia del elemento <div> con la clase 'day-night'
  @ViewChild('dayNight', { static: true }) dayNight!: ElementRef;

  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object,
    private translate: TranslateService = inject(TranslateService)

  ) {}

  ngAfterViewInit(): void {
    // Solo realizamos las operaciones relacionadas con el DOM si estamos en el navegador
    if (isPlatformBrowser(this.platformId)) {
      // Al cargar el componente, verificamos si el tema oscuro está activo
      this.isDark = document.body.classList.contains('dark');

      this.updateIcon();

      // Configura el color inicial de las letras en función de isDark
      this.languages.forEach((language) => {
        const color = this.isDark ? 'var(--text-black-700)' : 'initial';
        this.renderer.setStyle(language.nativeElement, 'color', color);
      });

        // Toggle style switcher
        this.renderer.listen(
          this.styleSwitcherToggle.nativeElement,
          'click',
          () => {
            this.styleSwitcher.nativeElement.classList.toggle('open');
          }
        );

        // Hide style switcher on scroll
        window.addEventListener('scroll', () => {
          if (this.styleSwitcher.nativeElement.classList.contains('open')) {
            this.styleSwitcher.nativeElement.classList.remove('open');
          }
        });
    }
  }
  /*    ====================   themes colors  =================   */
  setActiveStyle(color: string): void {

    const styles = document.querySelectorAll('link.alternate-style');
    styles.forEach((styleElement: Element) => {
      const styleTitle = styleElement.getAttribute('title');
      if (color === styleTitle) {
        this.renderer.removeAttribute(styleElement, 'disabled');

      } else {
        this.renderer.setAttribute(styleElement, 'disabled', 'true');
      }
    });
  }

  /*    ====================   theme light and dark mode  =================   */
  toggleTheme() {
    // Alternamos el estado de 'isDark'
    this.isDark = !this.isDark;

    // Alternamos la clase 'dark' en el cuerpo
    if (this.isDark) {
      this.renderer.addClass(document.body, 'dark');

    } else {
      this.renderer.removeClass(document.body, 'dark');
    }
    // Actualizamos los colores de las letras de las clases 'languages'
    this.languages.forEach((language) => {
      if (this.isDark) {
        this.renderer.setStyle(language.nativeElement, 'color', 'var(--text-black-700)');
      } else {
        this.renderer.setStyle(language.nativeElement, 'color', 'initial'); // O el color predeterminado
      }
    });

    // Actualizamos el icono de día/noche
    this.updateIcon();
  }

  updateIcon() {
    const icon = this.dayNight.nativeElement.querySelector('i');
    if (this.isDark) {
      this.renderer.removeClass(icon, 'fa-moon');
      this.renderer.addClass(icon, 'fa-sun');

    } else {
      this.renderer.removeClass(icon, 'fa-sun');
      this.renderer.addClass(icon, 'fa-moon');
    }
  }
 /* Set language to show */
 setActiveLanguage(lang: string){
  this.translate.use(lang);
  console.log(`Idioma cambiado a: ${lang}`);
 }
}
