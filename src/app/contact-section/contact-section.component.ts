import { Component } from '@angular/core';
import {TranslateModule } from '@ngx-translate/core'

@Component({
    selector: 'app-contact-section',
    imports: [TranslateModule],
    templateUrl: './contact-section.component.html',
    styleUrl: './contact-section.component.css'
})


export class ContactSectionComponent {
  
  contact = {
    name:'Osmany Terry Diaz',
    telefone:'+1 (514) XXX-XXXX',
    adresse:'YnamsoBureau',
    email:'moimeme@ynamso.com',
    website:'www.domainname.com'

  }

}
