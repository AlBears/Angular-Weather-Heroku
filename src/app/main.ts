import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);


// Enable production mode unless running locally
if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}
