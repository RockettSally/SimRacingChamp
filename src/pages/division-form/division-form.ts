import { DivisionProvider } from './../../providers/division/division.service';
import { Division } from './../../models/division.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the DivisionFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-division-form',
  templateUrl: 'division-form.html',
})
export class DivisionFormPage {

  division: Division = new Division();
  formAction = {
    action: 'create',
    idDivision: 0
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private divisionService: DivisionProvider,
    private events: Events) {
    this.formAction.action = this.navParams.get('action');
    this.formAction.idDivision = this.navParams.get('idDivision');
  }

  ionViewDidLoad() {
    if(!this.navCtrl.canGoBack()){
      this.navCtrl.setRoot('HomePage');
    }
  }

  getTitle(){
    if(this.formAction.action === 'create'){
      return 'Create Division';
    } else {
      return 'Edit Division';
    }
  }

  onSubmit(){
    this.divisionService.createDivision(this.division).then(() => {
      this.navCtrl.pop().then(() => {
        this.events.publish('loadDivisions');
      })
    })
  }
}
