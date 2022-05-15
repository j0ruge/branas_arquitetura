import FareCalculatorFactory from './FareCalculatorFactory';
import Segment from './Segment'

export default class Ride {
  segments: Segment[];
  MINIMUM_FARE = 10;  

  constructor(){
    this.segments = [];
  }

  addSegment (distance: number, date: Date) {
    this.segments.push(new Segment(distance, date));
  }

  finish() {
    let fare = 0;
    for (const segment of this.segments) { 
			const fareCalculator = FareCalculatorFactory.create(segment);
      fare += fareCalculator.calculate(segment);
    }
    return (fare > this.MINIMUM_FARE) ? fare : this.MINIMUM_FARE;
  }
}