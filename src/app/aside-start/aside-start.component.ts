import { Component } from '@angular/core';
import { RouterLink, RouterModule} from '@angular/router';
import { TranslateModule} from '@ngx-translate/core';

@Component({
    selector: 'app-aside-start',
    imports: [RouterLink, RouterModule, TranslateModule],
    templateUrl: './aside-start.component.html',
    styleUrl: './aside-start.component.css'
})
export class AsideStartComponent {

}
