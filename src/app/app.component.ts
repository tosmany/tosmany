import { Component } from '@angular/core';
import { RouterOutlet, RouterModule, RouterLink } from '@angular/router';
import { MainContainerComponent } from './main-container/main-container.component';
import { AsideStartComponent } from "./aside-start/aside-start.component";
import { StyleSwitcherComponent } from './style-switcher/style-switcher.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { HomeSectionStartComponent } from './home-section-start/home-section-start.component';
import { PortoFolioSectionComponent } from './porto-folio-section/porto-folio-section.component';
import { ServiceComponent } from './service/service.component';
import { MainContentComponent } from './main-content/main-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterModule,
    RouterLink,
    MainContainerComponent, 
    AsideStartComponent, 
    StyleSwitcherComponent,
    MainContentComponent, ServiceComponent,
    ContactSectionComponent, 
    HomeSectionStartComponent,
    PortoFolioSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'OsmanyPortfolio';
}
