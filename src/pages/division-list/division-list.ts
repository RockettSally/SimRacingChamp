import { DivisionProvider } from './../../providers/division/division.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DivisionListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-division-list',
  templateUrl: 'division-list.html',
})
export class DivisionListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private divisionService: DivisionProvider) {
  }

  ionViewDidLoad() {
    if(!this.navCtrl.canGoBack()){
      this.navCtrl.setRoot('HomePage');
    }
  }

  ionViewDidEnter(){}

  divisionList(){
    return this.divisionService.getDivisions();
  }

  accessDivisionForm(action: string, idDivision?: number){
    this.navCtrl.push('DivisionFormPage', {
      action: action,
      idDivision: idDivision ? idDivision : null
    })
  }
}
