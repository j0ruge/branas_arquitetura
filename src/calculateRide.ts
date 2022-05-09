// @ts-nocheck

const OVERNIGHT_FARE = 3.90;
const SUNDAY_FARE = 2.90;
const OVERNIGHT_SUNDAY_FARE = 5;
const NORMAL_FARE = 2.1;
const OVERNIGHT_START = 22;
const OVERNIGHT_END = 6;
const MINIMUM_FARE = 10;

function isOvernight( date ) {
	return date.getHours() >= OVERNIGHT_START || date.getHours() <= OVERNIGHT_END
}

function isSunday( date ) {
	return date.getDay() === 0
}

function isValidDistance(distance) {
	return distance != null && distance != undefined && typeof distance === "number" && distance > 0
}

export function calculateRide (segments) {
	let fare = 0;
	for (const segment of segments) {
		if (isValidDistance) {
			if (segment.date != null && segment.date != undefined && segment.date instanceof Date && segment.date.toString() !== "Invalid Date") {	
					if (isOvernight(segment.date)) {
						if (!isSunday(segment.date)) {						
						fare += segment.distance * OVERNIGHT_FARE;					
					} else {
						fare += segment.distance * OVERNIGHT_SUNDAY_FARE;	
					}
				} else {					
					if (isSunday(segment.date)) {			
						fare += segment.distance * SUNDAY_FARE;			
					} else {
						fare += segment.distance * NORMAL_FARE;			
					}
				}
			} else {				
				return -2;
			}
		} else {
			return -1;
		}
		
	}
	if (fare < MINIMUM_FARE) {
		return MINIMUM_FARE;
	} else {
		return fare;
	}
}
