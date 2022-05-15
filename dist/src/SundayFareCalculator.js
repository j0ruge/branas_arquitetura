"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SundayFareCalculator {
    constructor() {
        this.FARE = 2.90;
    }
    calculate(segment) {
        return segment.distance * this.FARE;
    }
}
exports.default = SundayFareCalculator;
