import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChampFormPage } from './champ-form';

@NgModule({
  declarations: [
    ChampFormPage,
  ],
  imports: [
    IonicPageModule.forChild(ChampFormPage),
  ],
})
export class ChampFormPageModule {}
