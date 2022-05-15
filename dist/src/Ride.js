"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Segment_1 = __importDefault(require("./Segment"));
class Ride {
    constructor(fareCalculator) {
        this.fareCalculator = fareCalculator;
        this.MINIMUM_FARE = 10;
        /**
         * DIP (SOLID)
         *
         * Externalizando a dependêcia e fazendo com que um módulo não dependa do outro.
         *
         * */
        this.segments = [];
    }
    addSegment(distance, date) {
        this.segments.push(new Segment_1.default(distance, date));
    }
    finish() {
        let fare = 0;
        for (const segment of this.segments) {
            fare += this.fareCalculator.calculate(segment);
        }
        return (fare > this.MINIMUM_FARE) ? fare : this.MINIMUM_FARE;
    }
}
exports.default = Ride;
