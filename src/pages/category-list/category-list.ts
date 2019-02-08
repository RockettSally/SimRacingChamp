import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CategoryListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category-list',
  templateUrl: 'category-list.html',
})
export class CategoryListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    if(!this.navCtrl.canGoBack()){
      this.navCtrl.setRoot('HomePage');
    }
  }

  accessCategoryForm(action: string, idCategory?: number){
    this.navCtrl.push('CategoryFormPage', {
      action: action,
      idCategory: idCategory ? idCategory : null
    })
  }

}
