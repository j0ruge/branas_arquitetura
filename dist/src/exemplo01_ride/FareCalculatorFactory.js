"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NormalFareCalculator_1 = __importDefault(require("./NormalFareCalculator"));
const OvernightFareCalculator_1 = __importDefault(require("./OvernightFareCalculator"));
const OvernightSundayFareCalculator_1 = __importDefault(require("./OvernightSundayFareCalculator"));
const SundayFareCalculator_1 = __importDefault(require("./SundayFareCalculator"));
class FareCalculatorFactory {
    static create(segment) {
        if (segment.isOvernight() && !segment.isSunday()) {
            return new OvernightFareCalculator_1.default();
        }
        if (segment.isOvernight() && segment.isSunday()) {
            return new OvernightSundayFareCalculator_1.default();
        }
        if (segment.isSunday()) {
            return new SundayFareCalculator_1.default();
        }
        return new NormalFareCalculator_1.default();
    }
}
exports.default = FareCalculatorFactory;
