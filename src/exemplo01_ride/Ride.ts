import FareCalculator from './FareCalculator';
import Segment from './Segment'

export default class Ride {
  segments: Segment[];
  MINIMUM_FARE = 10;  

  constructor(readonly fareCalculator: FareCalculator){ 
    /**
     * DIP (SOLID)
     * 
     * Externalizando a dependêcia e fazendo com que um módulo não dependa do outro. 
     * 
     * */
    this.segments = [];
  }

  addSegment (distance: number, date: Date) {
    this.segments.push(new Segment(distance, date));
  }

  finish() {
    let fare = 0;
    for (const segment of this.segments) { 			
      fare += this.fareCalculator.calculate(segment);
    }
    return (fare > this.MINIMUM_FARE) ? fare : this.MINIMUM_FARE;
  }
}