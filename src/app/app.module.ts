import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SimRacingChampApp } from './app.component';

/* APP PLUGINS */
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DatePicker } from '@ionic-native/date-picker';
import { Toast } from '@ionic-native/toast';
import { UtilsModule } from '../utils/utils.module';
import { ProvidersModule } from '../providers/providers.module';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    SimRacingChampApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(SimRacingChampApp),
    IonicStorageModule.forRoot(),
    UtilsModule,
    ProvidersModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SimRacingChampApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DatePicker,
    Toast,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
