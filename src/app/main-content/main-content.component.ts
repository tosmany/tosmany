import { Component } from '@angular/core';
import { HomeSectionStartComponent } from '../home-section-start/home-section-start.component';
import { HomeSectionEndComponent } from '../home-section-end/home-section-end.component';
import { AboutSectionStartComponent } from "../about-section-start/about-section-start.component";
import { AboutSectionEndComponent } from "../about-section-end/about-section-end.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [HomeSectionStartComponent, HomeSectionEndComponent, AboutSectionStartComponent, AboutSectionEndComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {

}
 