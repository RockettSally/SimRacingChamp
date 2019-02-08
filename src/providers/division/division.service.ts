import { Division } from './../../models/division.model';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the DivisionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DivisionProvider {

  private divisions: Division[] = []

  constructor(private storage: Storage) {}

  getDivisions(): Division[] {
    if(this.divisions){
      return this.divisions;
    } else {
      this.loadDivisions().then((divisions: Division[]) => {
        this.divisions = divisions;
        return this.divisions;
      })
    }
  }

  private loadDivisions(){
    return new Promise((resolve, reject) => {
      this.storage.get('divisions').then((divisions) => {
        resolve(divisions);
      })
    })
  }

  createDivision(division: Division){
    if(this.getDivisions().length === 0){
      division.id = 1;
    } else {
      division.id = (this.getDivisions()[this.getDivisions().length - 1].id + 1);
    }
    this.divisions.push(division);
    return new Promise((resolve, reject) => {
      this.storage.set('divisions', this.divisions).then(() => {
        resolve();
      },(err) => {
        console.error(err);
        reject(err);
      })
    })
  }
}
