"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Segment {
    constructor(distance, date) {
        this.distance = distance;
        this.date = date;
        this.OVERNIGHT_START = 22;
        this.OVERNIGHT_END = 6;
        this.SUNDAY = 0;
        if (!this.isValidDistance(distance))
            throw new Error('Invalid Distance');
        if (!this.isValidDate(date))
            throw new Error('Invalid Date');
    }
    isValidDistance(distance) {
        return distance != null && distance != undefined && typeof distance === "number" && distance > 0;
    }
    isValidDate(date) {
        return date != null && date != undefined && date instanceof Date && date.toString() !== "Invalid Date";
    }
    isOvernight() {
        return this.date.getHours() >= this.OVERNIGHT_START || this.date.getHours() <= this.OVERNIGHT_END;
    }
    isSunday() {
        return this.date.getDay() === this.SUNDAY;
    }
}
exports.default = Segment;
