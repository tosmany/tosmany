import { Component } from '@angular/core';
import { HomeSectionStartComponent } from '../home-section-start/home-section-start.component';
import { HomeSectionEndComponent } from '../home-section-end/home-section-end.component';
import { AboutSectionStartComponent } from "../about-section-start/about-section-start.component";
import { AboutSectionEndComponent } from "../about-section-end/about-section-end.component";
import { ServiceComponent } from '../service/service.component';
import { ServiceEndComponent } from '../service-end/service-end.component';
import { PortoFolioSectionComponent } from '../porto-folio-section/porto-folio-section.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [HomeSectionStartComponent, HomeSectionEndComponent, AboutSectionStartComponent, AboutSectionEndComponent, ServiceComponent, ServiceEndComponent, PortoFolioSectionComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {

}
