export interface Plan {
  id:number;
  title:String;
  startDate:Date;
  endDate:Date;
  meals:[];
  shoppingItems:[];
  user:String;
}
