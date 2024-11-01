import { Component } from '@angular/core';
import { AsideStartComponent } from '../aside-start/aside-start.component';
import { AsideEndComponent } from '../aside-end/aside-end.component';
import { MainContentComponent } from '../main-content/main-content.component';
import { MainContainerEndComponent } from '../main-container-end/main-container-end.component';
import { MainContentEndComponent } from "../main-content-end/main-content-end.component";

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [AsideStartComponent, AsideEndComponent, MainContentComponent, MainContentEndComponent],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.css'
})
export class MainContainerComponent {

}
