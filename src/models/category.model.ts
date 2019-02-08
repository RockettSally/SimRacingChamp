export class Category {

  id: number;
  name: string;
  short: string;

  constructor(category?: Category){
    if(category){
      this.id = category.id;
      this.name = category.name;
      this.short = category.short;
    } else {
      this.id = 0;
      this.name = null;
      this.short = null;
    }
  }
}
