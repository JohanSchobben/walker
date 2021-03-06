import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DB_VERSION, DB_NAME } from './database.const';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MatNativeDateModule } from '@angular/material/core';
import { AppInitService } from './services/app-init.service';
import { ThemeService } from './profile/service/theme.service';
import { ProfileService } from './profile/service/profile.service';
import { ProfileDatabaseService } from './profile/service/profile-database.service';
import { DatabaseService } from './database.service';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule, SwUpdate } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {MatTooltipModule} from '@angular/material/tooltip';
import localeNL from '@angular/common/locales/nl';
import { registerLocaleData } from '@angular/common';


registerLocaleData(localeNL);


const matSnackbarOptions: MatSnackBarConfig<any> = {
   duration: 3000
}

function initApp(appInitService: AppInitService){
  return () => appInitService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatNativeDateModule,
    SharedModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MatTooltipModule,
    MatSnackBarModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'nl-NL'},
    {provide: DB_VERSION, useValue: 1},
    {provide: DB_NAME, useValue: 'walker-db'},
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: matSnackbarOptions},
    {
      provide: APP_INITIALIZER,
      deps:[
        AppInitService,
        ThemeService,
        ProfileService,
        ProfileDatabaseService,
        DatabaseService,
      ],
      useFactory: initApp,
      multi: true
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  constructor(swUpdate: SwUpdate, snackbar: MatSnackBar) {
    swUpdate.available.subscribe(() => {
      const snack = snackbar.open('update beschikbaar', 'verversen', {duration: 1_800_000});

      snack.onAction().subscribe(() => {
        window.location.reload();
      });
    })
  }
}
