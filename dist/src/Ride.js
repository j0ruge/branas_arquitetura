"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Segment_1 = __importDefault(require("./Segment"));
class Ride {
    constructor() {
        this.OVERNIGHT_FARE = 3.90;
        this.SUNDAY_FARE = 2.90;
        this.OVERNIGHT_SUNDAY_FARE = 5;
        this.NORMAL_FARE = 2.1;
        this.OVERNIGHT_START = 22;
        this.OVERNIGHT_END = 6;
        this.MINIMUM_FARE = 10;
        this.SUNDAY = 0;
        this.segments = [];
    }
    addSegment(distance, date) {
        this.segments.push(new Segment_1.default(distance, date));
    }
    isOvernight(date) {
        return date.getHours() >= this.OVERNIGHT_START || date.getHours() <= this.OVERNIGHT_END;
    }
    isSunday(date) {
        return date.getDay() === this.SUNDAY;
    }
    isValidDistance(distance) {
        return distance != null && distance != undefined && typeof distance === "number" && distance > 0;
    }
    isValidDate(date) {
        return date != null && date != undefined && date instanceof Date && date.toString() !== "Invalid Date";
    }
    finish() {
        let fare = 0;
        for (const segment of this.segments) {
            if (!this.isValidDistance(segment.distance))
                throw new Error('Invalid Distance');
            if (!this.isValidDate(segment.date))
                throw new Error('Invalid Date');
            if (this.isOvernight(segment.date) && !this.isSunday(segment.date)) {
                fare += segment.distance * this.OVERNIGHT_FARE;
                continue;
            }
            if (this.isOvernight(segment.date) && this.isSunday(segment.date)) {
                fare += segment.distance * this.OVERNIGHT_SUNDAY_FARE;
                continue;
            }
            if (this.isSunday(segment.date)) {
                fare += segment.distance * this.SUNDAY_FARE;
                continue;
            }
            fare += segment.distance * this.NORMAL_FARE;
        }
        return (fare > this.MINIMUM_FARE) ? fare : this.MINIMUM_FARE;
    }
}
exports.default = Ride;
