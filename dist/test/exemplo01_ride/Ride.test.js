"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NormalFareCalculator_1 = __importDefault(require("../../src/exemplo01_ride/NormalFareCalculator"));
const OvernightFareCalculator_1 = __importDefault(require("../../src/exemplo01_ride/OvernightFareCalculator"));
const OvernightSundayFareCalculator_1 = __importDefault(require("../../src/exemplo01_ride/OvernightSundayFareCalculator"));
const Ride_1 = __importDefault(require("../../src/exemplo01_ride/Ride"));
const SundayFareCalculator_1 = __importDefault(require("../../src/exemplo01_ride/SundayFareCalculator"));
let ride;
/**
 * Utilizando o padrão CHAIN OF RESPONSABILITY *
 *
 */
beforeEach(function () {
    const normalFareCalculator = new NormalFareCalculator_1.default();
    const sundayFareCalculator = new SundayFareCalculator_1.default(normalFareCalculator);
    const overnightSundayFareCalculator = new OvernightSundayFareCalculator_1.default(sundayFareCalculator);
    const overnightFareCalculator = new OvernightFareCalculator_1.default(overnightSundayFareCalculator);
    ride = new Ride_1.default(overnightFareCalculator);
});
test('Deve calcular o valor da corrida em horário normal', function () {
    ride.addSegment(10, new Date('2021-03-01T10:00:00'));
    const fare = ride.finish();
    expect(fare).toBe(21);
});
test('Deve calcular o valor da corrida em horário noturno', function () {
    ride.addSegment(10, new Date('2021-03-01T23:00:00'));
    const fare = ride.finish();
    expect(fare).toBe(39);
});
test('Deve calcular o valor da corrida em horário no domingo', function () {
    ride.addSegment(10, new Date('2021-03-07T10:00:00'));
    const fare = ride.finish();
    expect(fare).toBe(29);
});
test('Deve calcular o valor da corrida em horário no domingo', function () {
    ride.addSegment(10, new Date('2021-03-07T23:00:00'));
    const fare = ride.finish();
    expect(fare).toBe(50);
});
test('Deve calcular o valor da corrida mínima.', function () {
    ride.addSegment(3, new Date('2021-03-01T10:00:00'));
    const fare = ride.finish();
    expect(fare).toBe(10);
});
test('Deve retornar "Invalid Distance" se a distância for inválida.', function () {
    expect(() => ride.addSegment(-3, new Date('2021-03-01T10:00:00'))).toThrow(new Error('Invalid Distance'));
});
test('Deve retornar "Invalid Date" se a data for inválida.', function () {
    expect(() => ride.addSegment(10, new Date('data_invalida'))).toThrow(new Error('Invalid Date'));
});
test('Deve retornar o valor da corrida em múltiplos horários.', function () {
    ride.addSegment(10, new Date('2021-03-01T21:00:00'));
    ride.addSegment(10, new Date('2021-03-01T22:00:00'));
    const fare = ride.finish();
    expect(fare).toBe(60);
});
