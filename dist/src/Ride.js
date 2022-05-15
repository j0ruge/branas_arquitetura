"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NormalFareCalculator_1 = __importDefault(require("./NormalFareCalculator"));
const OvernightFareCalculator_1 = __importDefault(require("./OvernightFareCalculator"));
const OvernightSundayFareCalculator_1 = __importDefault(require("./OvernightSundayFareCalculator"));
const Segment_1 = __importDefault(require("./Segment"));
const SundayFareCalculator_1 = __importDefault(require("./SundayFareCalculator"));
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
            if (segment.isOvernight() && !segment.isSunday()) {
                const fareCalculator = new OvernightFareCalculator_1.default();
                fare += fareCalculator.calculate(segment);
                continue;
            }
            if (segment.isOvernight() && segment.isSunday()) {
                const fareCalculator = new OvernightSundayFareCalculator_1.default();
                fare += fareCalculator.calculate(segment);
                continue;
            }
            if (segment.isSunday()) {
                const fareCalculator = new SundayFareCalculator_1.default();
                fare += fareCalculator.calculate(segment);
                continue;
            }
            const fareCalculator = new NormalFareCalculator_1.default();
            fare += fareCalculator.calculate(segment);
        }
        return (fare > this.MINIMUM_FARE) ? fare : this.MINIMUM_FARE;
    }
}
exports.default = Ride;
