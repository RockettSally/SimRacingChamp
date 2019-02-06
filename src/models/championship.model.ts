export class Champioship {

  id: number;
  name: string;
  dateStart: Date;
  dateEnd: Date;
  division: string;
  category: string;
  racers: any[];
  events: any[];

  constructor(championship?: Champioship){
    if(championship){
      this.id = championship.id;
      this.name = championship.name;
      this.dateStart = championship.dateStart;
      this.dateEnd = championship.dateEnd;
      this.division = championship.division;
      this.category = championship.category;
      this.racers = championship.racers;
      this.events = championship.events;
    } else {
      this.id = 0;
      this.name = null;
      this.dateStart = new Date();
      this.dateEnd = new Date();
      this.division = null;
      this.category = null;
      this.racers = [];
      this.events = [];
    }
  }
}
