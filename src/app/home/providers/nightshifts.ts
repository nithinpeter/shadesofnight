import {Injectable} from 'angular2/core';

@Injectable()
export class NightShifts {
  
  private shifts = [
    {
        index: 0,
        timeSlot: "00",
        background: "red"   
    }, {
        index: 1,
        timeSlot: "01",
        background: "blue"   
    }, {
        index: 2,
        timeSlot: "02",
        background: "green"   
    }, {
        index: 3,
        timeSlot: "03",
        background: "yellow"   
    }
  ];
   
  constructor() {
  }
  
  getActiveItem = () => {
      var hours = new Date().getHours();
      if(hours > 3) hours = 2;
      return this.shifts[hours]
  } 
  
}
