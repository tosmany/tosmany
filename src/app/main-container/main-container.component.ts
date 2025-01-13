import { Component } from '@angular/core';
import { AsideStartComponent } from '../aside-start/aside-start.component';
//import { AsideEndComponent } from '../aside-end/aside-end.component';
//import { MainContentComponent } from '../main-content/main-content.component';
//import { MainContentEndComponent } from "../main-content-end/main-content-end.component";
import { StyleSwitcherComponent } from "../style-switcher/style-switcher.component";
import { TranslateModule } from '@ngx-translate/core';
//import { HomeSectionStartComponent } from "../home-section-start/home-section-start.component";


@Component({
    selector: 'app-main-container',
    imports: [AsideStartComponent, StyleSwitcherComponent, TranslateModule],
    //imports: [AsideStartComponent, AsideEndComponent, MainContentComponent, MainContentEndComponent, StyleSwitcherComponent, HomeSectionStartComponent],
    templateUrl: './main-container.component.html',
    styleUrl: './main-container.component.css'
})
export class MainContainerComponent {

}
