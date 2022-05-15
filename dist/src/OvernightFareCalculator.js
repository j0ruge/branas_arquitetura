"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OvernightFareCalculator {
    constructor() {
        this.FARE = 3.90;
    }
    calculate(segment) {
        return segment.distance * this.FARE;
    }
}
exports.default = OvernightFareCalculator;
