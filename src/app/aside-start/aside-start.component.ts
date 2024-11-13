import { Component } from '@angular/core';
import { RouterLink, RouterModule} from '@angular/router';

@Component({
  selector: 'app-aside-start',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './aside-start.component.html',
  styleUrl: './aside-start.component.css'
})
export class AsideStartComponent {

}
