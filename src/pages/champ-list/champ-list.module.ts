import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChampListPage } from './champ-list';

@NgModule({
  declarations: [
    ChampListPage,
  ],
  imports: [
    IonicPageModule.forChild(ChampListPage),
  ],
})
export class ChampListPageModule {}
