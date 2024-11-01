import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainContainerComponent } from './main-container/main-container.component';
import { MainContainerEndComponent } from './main-container-end/main-container-end.component';
import { AsideStartComponent } from "./aside-start/aside-start.component";
import { AsideEndComponent } from "./aside-end/aside-end.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainContainerComponent, MainContainerEndComponent, AsideStartComponent, AsideEndComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'OsmanyPortfolio';
}
