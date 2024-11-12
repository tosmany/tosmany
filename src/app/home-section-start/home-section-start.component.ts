import { Component } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home-section-start',
  standalone: true,
  imports: [],
  templateUrl: './home-section-start.component.html',
  styleUrl: './home-section-start.component.css'
})
export class HomeSectionStartComponent {
  presentation = {
    gretting:'Salut, mon nom est',
    name: 'Osmany Terry Diaz',
    title: 'Développeur web',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur nam beatae provident, voluptatem quibusdam deserunt ipsum accusantium laborum nisi veniam doloremque facere velit consequatur quod dolor inventore. Hic, voluptatibus adipisci?',
    buttonText: 'En savoir plus',
    buttonUrl: '/about',
    image:'../images/osmany.jpg'
  }
  ngOnInit(): void {
    // Aquí inicializamos Typed.js
    const options = {
      strings: ["", "Web Analyst", "Developper Web"],  // Las cadenas a escribir
      typeSpeed: 100,  // Velocidad de escritura
      backSpeed: 60,   // Velocidad de borrado
      loop: true       // Repetir el ciclo
    };

    // Crea una nueva instancia de Typed.js y lo aplica al elemento con la clase "typing"
    new Typed('.typing', options);
  }
}
