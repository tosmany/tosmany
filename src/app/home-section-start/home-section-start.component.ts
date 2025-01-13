import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateModule }  from '@ngx-translate/core'
import Typed from 'typed.js';

@Component({
    selector: 'app-home-section-start',
    imports: [TranslateModule],
    templateUrl: './home-section-start.component.html',
    styleUrl: './home-section-start.component.css'
})
export class HomeSectionStartComponent {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
  presentation = {
    gretting: $localize `Salut, mon nom est`,
    name: 'Osmany Terry Diaz',
    title: $localize `Développeur web`,
    description: $localize `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur nam beatae provident, voluptatem quibusdam deserunt ipsum accusantium laborum nisi veniam doloremque facere velit consequatur quod dolor inventore. Hic, voluptatibus adipisci`,
    buttonText: $localize `En savoir plus`,
    buttonUrl: '/about',
    image:'../images/osmany.jpg'
  }
  ngOnInit(): void {
    // Vérifier si nous sommes dans le browser
    if (isPlatformBrowser(this.platformId)) {
      // Aquí inicializamos Typed.js
      const options = {
        strings: ["", $localize `Analyste web, Développeur web, Concepteur web`],  // Las cadenas a escribir
        typeSpeed: 100,  // Velocidad de escritura
        backSpeed: 60,   // Velocidad de borrado
        loop: true       // Repetir el ciclo
      };

      // Crea una nueva instancia de Typed.js y lo aplica al elemento con la clase "typing"
      new Typed('.typing', options);
    }
    
  }
}
