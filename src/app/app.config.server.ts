import {
  ApplicationConfig,
  importProvidersFrom,
  mergeApplicationConfig,
} from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideServerRoutesConfig } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';

import { NgxGoogleAnalyticsModule } from 'ngx-google-analytics';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideServerRoutesConfig(serverRoutes),
    importProvidersFrom([NgxGoogleAnalyticsModule.forRoot('G-2H41LFGDMJ')]),
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
