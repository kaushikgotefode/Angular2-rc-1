import { enableProdMode, provide } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

// root component
import { AppComponent } from './components/app/app.component';

// // modules
// import { AUTH_PROVIDERS } from 'modules/auth/providers';

// global styles
import 'styles/app.scss';

if(process.env.NODE_ENV === 'production') {
  enableProdMode();
}

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]).catch((error: Error) => console.error(error));
