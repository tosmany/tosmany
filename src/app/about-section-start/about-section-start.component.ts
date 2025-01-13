import { Component } from '@angular/core';
import { PdfComponentComponent } from '../pdf-component/pdf-component.component';
import { TranslateModule } from '@ngx-translate/core';


@Component({
    selector: 'app-about-section-start',
    imports: [TranslateModule],
    templateUrl: './about-section-start.component.html',
    styleUrl: './about-section-start.component.css'
})
export class AboutSectionStartComponent {
  user =
    {
      name: 'Osmany Terry',
      titre: $localize `Analyste programmeur`,
      email: 'info@moimeme.com',
      phone: '+1 (514) 555-5555',
      dateNaissace: $localize `21 octobre`,
      degree:'CS',
      web: 'www.moimeme.com',
      description: $localize `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolorem ipsum iure ullam ipsa expedita libero mollitia non voluptatem tempore quod consectetur unde soluta, qui accusamus quos. Cupiditate, quisquam exercitationem! Aspernatur consequatur, facere numquam ex sed ipsum laboriosam ullam quia ipsa optio atque vero possimus velit dolore quos provident illo excepturi. Repellendus, deserunt. Consequatur perferendis a at fugiat eius nemo.`,
      image: 'osmany-terry.jpg',
      feelnace: $localize `Disponible`,
      compentence: {
        js: '86',
        php: '66',
        html: '96',
        bootstrap: '76',
      }


    }

}
