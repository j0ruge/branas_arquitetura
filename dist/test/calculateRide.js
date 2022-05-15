"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateRide_1 = require("../src/calculateRide");
test('Deve calcular o valor da corrida em horário normal', function () {
    const fare = (0, calculateRide_1.calculateRide)([{ distance: 10, date: new Date('2021-03-01T10:00:00') }]);
    expect(fare).toBe(21);
});
test('Deve calcular o valor da corrida em horário noturno', function () {
    const fare = (0, calculateRide_1.calculateRide)([{ distance: 10, date: new Date('2021-03-01T23:00:00') }]);
    expect(fare).toBe(39);
});
test('Deve calcular o valor da corrida em horário no domingo', function () {
    const fare = (0, calculateRide_1.calculateRide)([{ distance: 10, date: new Date('2021-03-07T10:00:00') }]);
    expect(fare).toBe(29);
});
test('Deve calcular o valor da corrida em horário no domingo', function () {
    const fare = (0, calculateRide_1.calculateRide)([{ distance: 10, date: new Date('2021-03-07T23:00:00') }]);
    expect(fare).toBe(50);
});
test('Deve calcular o valor da corrida mínima.', function () {
    const fare = (0, calculateRide_1.calculateRide)([{ distance: 3, date: new Date('2021-03-01T10:00:00') }]);
    expect(fare).toBe(10);
});
test('Deve retornar "Invalid Distance" se a distância for inválida.', function () {
    expect(() => (0, calculateRide_1.calculateRide)([{ distance: -3, date: new Date('2021-03-01T10:00:00') }])).toThrow(new Error('Invalid Distance'));
});
test('Deve retornar "Invalid Date" se a data for inválida.', function () {
    expect(() => (0, calculateRide_1.calculateRide)([{ distance: 10, date: new Date('data_invalida') }])).toThrow(new Error('Invalid Date'));
});
test('Deve retornar o valor da corrida em múltiplos horários.', function () {
    const fare = (0, calculateRide_1.calculateRide)([
        { distance: 10, date: new Date('2021-03-01T21:00:00') },
        { distance: 10, date: new Date('2021-03-01T22:00:00') },
    ]);
    expect(fare).toBe(60);
});
