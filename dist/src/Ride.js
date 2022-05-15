"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FareCalculatorFactory_1 = __importDefault(require("./FareCalculatorFactory"));
const Segment_1 = __importDefault(require("./Segment"));
class Ride {
    constructor() {
        this.MINIMUM_FARE = 10;
        this.segments = [];
    }
    addSegment(distance, date) {
        this.segments.push(new Segment_1.default(distance, date));
    }
    finish() {
        let fare = 0;
        for (const segment of this.segments) {
            const fareCalculator = FareCalculatorFactory_1.default.create(segment);
            fare += fareCalculator.calculate(segment);
        }
        return (fare > this.MINIMUM_FARE) ? fare : this.MINIMUM_FARE;
    }
}
exports.default = Ride;
