import { Toast } from '@ionic-native/toast';
import { Injectable } from "@angular/core";
import { ToastController } from 'ionic-angular';

@Injectable()
export class ToastUtils{

  constructor(private toast: Toast, private toastCtrl: ToastController){

  }

  private show(params: {msg: string, duration: string, position: string}, type: string){
    switch(type){
      case 'native':
        this.toast.show(params.msg, params.duration, params.position).subscribe((toast) => {
          console.log(toast);
        })
        break;

      case 'ionic':
        this.toastCtrl.create({
          message: params.msg,
          duration: parseInt(params.duration, 10),
          position: params.position,
        }).present();
        break;
    }
  }

  showToast(msg: string, native?: boolean, short?: boolean, timeMultiplier = 1){
    let params = {
      msg: msg,
      duration: (short ? 1500 * timeMultiplier : 3000 * timeMultiplier).toString(),
      position: 'bottom'
    }

    if(native){
      this.show(params, 'native');
    } else {
      this.show(params, 'ionic');
    }
  }

}
