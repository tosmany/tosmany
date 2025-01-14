import { Injectable } from '@angular/core';
import { TranslateService} from '@ngx-translate/core'

@Injectable({
  providedIn: 'root'
})
export class TraductorService {

  constructor(private translate: TranslateService) {
      this.translate.setDefaultLang('en');
      this.translate.use('en');
   }
   setLanguage(lang: string): void {
    console.log(`Cambiando idioma a: ${lang}`);
    this.translate.use(lang).subscribe({
      next: () => console.log(`Idioma cambiado exitosamente: ${lang}`),
      error: (err) => console.error(`Error al cambiar idioma: ${lang}`, err),
    });
  }

}
