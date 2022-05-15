"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NormalFareCalculator {
    constructor() {
        this.FARE = 2.10;
    }
    calculate(segment) {
        return segment.distance * this.FARE;
    }
}
exports.default = NormalFareCalculator;
