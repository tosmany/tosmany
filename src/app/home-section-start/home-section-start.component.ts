import { Component } from '@angular/core';

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
}
