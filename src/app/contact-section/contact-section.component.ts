import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.css'
})
export class ContactSectionComponent {
  phone: '+1 (514) XXX-XXXX' | undefined;

}
