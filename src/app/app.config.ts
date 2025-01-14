import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import {provideHttpClient, HttpClient, withFetch} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { provideRouter } from '@angular/router';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { TraductorService } from './traductor.service';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

const httpLoaderFactory: (http: HttpClient) => TranslateHttpLoader = (http: HttpClient) =>
  new TranslateHttpLoader(http, './assets/i18n/', '.json');

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideClientHydration(),
    importProvidersFrom([TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ]),
  TraductorService
  ]
};
