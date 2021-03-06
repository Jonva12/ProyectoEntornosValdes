import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { YoutubePipe } from '../pipes/youtube/youtube';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DatosPage } from '../pages/datos/datos';
import { TabsPage } from '../tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DatosPage,
    TabsPage,
    YoutubePipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    DatosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
