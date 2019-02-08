import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DivisionFormPage } from './division-form';

@NgModule({
  declarations: [
    DivisionFormPage,
  ],
  imports: [
    IonicPageModule.forChild(DivisionFormPage),
  ],
})
export class DivisionFormPageModule {}
