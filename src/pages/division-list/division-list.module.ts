import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DivisionListPage } from './division-list';

@NgModule({
  declarations: [
    DivisionListPage,
  ],
  imports: [
    IonicPageModule.forChild(DivisionListPage),
  ],
})
export class DivisionListPageModule {}
