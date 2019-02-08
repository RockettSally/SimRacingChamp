export class Division {

  id: number;
  name: string;
  short: string;

  constructor(division?: Division){
    if(division){
      this.id = division.id;
      this.name = division.name;
      this.short = division.short;
    } else {
      this.id = 0;
      this.name = null;
      this.short = null;
    }
  }
}
