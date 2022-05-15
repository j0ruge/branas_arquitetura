import Segment from './Segment'

export default class Ride {
  segments: Segment[];
  OVERNIGHT_FARE = 3.90;
  SUNDAY_FARE = 2.90;
  OVERNIGHT_SUNDAY_FARE = 5;
  NORMAL_FARE = 2.1;
  OVERNIGHT_START = 22;
  OVERNIGHT_END = 6;
  MINIMUM_FARE = 10;
  SUNDAY = 0;

  constructor(){
    this.segments = [];
  }

  addSegment (distance: number, date: Date) {
    this.segments.push(new Segment(distance, date));
  }

  isOvernight( date : Date ) {
    return date.getHours() >= this.OVERNIGHT_START || date.getHours() <= this.OVERNIGHT_END
  }
  
  isSunday( date : Date ) {
    return date.getDay() === this.SUNDAY
  }
  
  isValidDistance(distance: number) {
    return distance != null && distance != undefined && typeof distance === "number" && distance > 0
  }
  
  isValidDate( date : Date){
    return date != null && date != undefined && date instanceof Date && date.toString() !== "Invalid Date"
  }


  finish() {
    let fare = 0;
    for (const segment of this.segments) {
      if (!this.isValidDistance(segment.distance)) throw new Error('Invalid Distance');
			if (!this.isValidDate(segment.date)) throw new Error('Invalid Date');
			if (this.isOvernight(segment.date) && !this.isSunday(segment.date)) {											
					fare += segment.distance * this.OVERNIGHT_FARE;
					continue;					
			} 
			if (this.isOvernight(segment.date) && this.isSunday(segment.date)) {
					fare += segment.distance * this.OVERNIGHT_SUNDAY_FARE;
					continue;
			}			
			if (this.isSunday(segment.date)) {			
					fare += segment.distance * this.SUNDAY_FARE;
					continue;		
			}
			fare += segment.distance * this.NORMAL_FARE;
    }
    return (fare > this.MINIMUM_FARE) ? fare : this.MINIMUM_FARE;
  }

}