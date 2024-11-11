import { Routes } from '@angular/router';
import { HomeSectionStartComponent } from './home-section-start/home-section-start.component';
import { AboutSectionStartComponent } from './about-section-start/about-section-start.component';
import { ServiceComponent } from './service/service.component';
import { PortoFolioSectionComponent } from './porto-folio-section/porto-folio-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';


export const routes: Routes = [
    { path: '', component: HomeSectionStartComponent  },
    { path: 'home', component:  HomeSectionStartComponent },
    { path: 'about', component: AboutSectionStartComponent },
    { path: 'service', component: ServiceComponent },
    { path: 'portfolio', component: PortoFolioSectionComponent },
    { path: 'contact', component: ContactSectionComponent  }
];
