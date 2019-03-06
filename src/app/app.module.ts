import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NFC } from "@ionic-native/nfc";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainProvider } from '../providers/main/main';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    NFC,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MainProvider
  ]
})
export class AppModule {}
