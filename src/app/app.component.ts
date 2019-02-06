import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, IonicApp } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})

export class SimRacingChampApp {

  @ViewChild(Nav) nav: Nav;
  rootPage: any = 'HomePage';
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
    private ionicApp: IonicApp) {
    this.initializeApp();
    this.pages = [
      { title: 'Home', component: 'HomePage' }
    ];
  }

  initializeApp(){
    this.platform.ready().then(() => {
      // this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.registerBackButtonExit();
    });
  }

  openPage(page){
    this.nav.setRoot(page.component);
  }

  registerBackButtonExit(){
    this.platform.registerBackButtonAction(() => {
      let activeModal = this.ionicApp._modalPortal.getActive();
      if(activeModal){
        activeModal.dismiss();
      } else {
        if(!this.nav.getActive().isFirst()){
          this.nav.pop();
        } else {
          if(this.nav.getActive().name !== 'HomePage' && this.nav.getActive().name !== 'LoginPage'){
            this.nav.setRoot('HomePage');
          } else {
            this.platform.exitApp();
          }
        }
      }
    })
  }

}
