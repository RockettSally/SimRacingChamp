import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChampListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-champ-list',
  templateUrl: 'champ-list.html',
})
export class ChampListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    if(!this.navCtrl.canGoBack()){
      this.navCtrl.setRoot('HomePage');
    }
  }

  accessChampForm(action: string, idChamp?: number){
    this.navCtrl.push('ChampFormPage', {
      action: action,
      idChamp: idChamp ? idChamp : null
    })
  }
}
