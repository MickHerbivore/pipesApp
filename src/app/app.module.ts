import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

// Cambiar locale de la app
import localeEsCL from '@angular/common/locales/es-CL';
import localeFr from '@angular/common/locales/fr';
import localeEo from '@angular/common/locales/eo';
import { registerLocaleData } from '@angular/common';
registerLocaleData( localeEsCL );
registerLocaleData( localeFr );
registerLocaleData( localeEo );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ES-CL' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
