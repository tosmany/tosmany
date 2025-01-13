import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainContainerComponent } from './main-container/main-container.component';
import { StyleSwitcherComponent } from './style-switcher/style-switcher.component';
import { TraductorService } from './traductor.service';
import { TranslateModule } from '@ngx-translate/core';


@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        MainContainerComponent,
        StyleSwitcherComponent,
        TranslateModule
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private translate: TraductorService){}
  title = 'OsmanyPortfolio';
}
