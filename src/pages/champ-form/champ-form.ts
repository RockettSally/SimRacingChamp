import { ToastUtils } from './../../utils/toast';
import { DatePicker } from '@ionic-native/date-picker';
import { Champioship } from './../../models/championship.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChampFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-champ-form',
  templateUrl: 'champ-form.html',
})
export class ChampFormPage {

  championship: Champioship = new Champioship();
  formAction = {
    action: 'create',
    idChamp: 0
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private datePicker: DatePicker, private toast: ToastUtils) {
    this.formAction.action = this.navParams.get('action');
    this.formAction.idChamp = this.navParams.get('idChamp');
  }

  ionViewDidLoad() {
    if(!this.navCtrl.canGoBack()){
      this.navCtrl.setRoot('HomePage');
    }
  }

  getTitle(){
    if(this.formAction.action === 'create'){
      return 'Create Championship';
    } else {
      return 'Edit Championship';
    }
  }

  openDatePicker(action?: string){
    this.datePicker.show({
      date: action === 'start' ? this.championship.dateStart : this.championship.dateEnd,
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
    }).then((date) => {
      switch(action){
        case 'start':
          if(date.getTime() > this.championship.dateEnd.getTime()){
            console.error('You can\'t choose a Start Date after the End Date');
            this.toast.showToast('You can\'t choose a Start Date after the End Date', true, false);
          } else {
            this.championship.dateStart = date;
          }
          break;

        case 'end':
          if(date.getTime() < this.championship.dateStart.getTime()){
            console.error('You can\'t choose a End Date before the Start Date');
            this.toast.showToast('You can\'t choose a End Date before the Start Date', true, false);
          } else {
            this.championship.dateEnd = date;
          }
          break;
      }
    }, (err) => {
      console.log('Error occurred while getting date: ', err);
    })
  }
}
