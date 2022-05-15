"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OvernightSundayFareCalculator {
    constructor() {
        this.FARE = 5;
    }
    calculate(segment) {
        return segment.distance * this.FARE;
    }
}
exports.default = OvernightSundayFareCalculator;
