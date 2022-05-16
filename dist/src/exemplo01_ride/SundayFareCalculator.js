"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
* Utilizando o padrão CHAIN OF RESPONSABILITY *
*
*/
class SundayFareCalculator {
    constructor(next) {
        this.next = next;
        this.FARE = 2.90;
    }
    calculate(segment) {
        var _a;
        if (segment.isSunday() && !segment.isOvernight()) {
            return segment.distance * this.FARE;
        }
        if (!this.next)
            throw new Error('');
        return (_a = this.next) === null || _a === void 0 ? void 0 : _a.calculate(segment);
    }
}
exports.default = SundayFareCalculator;
