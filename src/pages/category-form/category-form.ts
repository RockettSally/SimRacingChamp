import { Category } from './../../models/category.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CategoryFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category-form',
  templateUrl: 'category-form.html',
})
export class CategoryFormPage {

  category: Category = new Category();
  formAction = {
    action: 'create',
    idCategory: 0
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.formAction.action = this.navParams.get('action');
    this.formAction.idCategory = this.navParams.get('idCategory');
  }

  ionViewDidLoad() {
    if(!this.navCtrl.canGoBack()){
      this.navCtrl.setRoot('HomePage');
    }
  }

  getTitle(){
    if(this.formAction.action === 'create'){
      return 'Create Category';
    } else {
      return 'Edit Category';
    }
  }
}
