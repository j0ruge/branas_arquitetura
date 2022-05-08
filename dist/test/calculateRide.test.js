"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateRide_1 = require("../src/calculateRide");
test('Deve calcular o valor da corrida em horário normal', function () {
    const result = (0, calculateRide_1.calculateRide)([{ dist: 10, ds: new Date('2021-03-01T10:00:00') }]);
    expect(result).toBe(21);
});
test('Deve calcular o valor da corrida em horário noturno', function () {
    const result = (0, calculateRide_1.calculateRide)([{ dist: 10, ds: new Date('2021-03-01T23:00:00') }]);
    expect(result).toBe(39);
});
test('Deve calcular o valor da corrida em horário no domingo', function () {
    const result = (0, calculateRide_1.calculateRide)([{ dist: 10, ds: new Date('2021-03-07T10:00:00') }]);
    expect(result).toBe(29);
});
test('Deve calcular o valor da corrida em horário no domingo', function () {
    const result = (0, calculateRide_1.calculateRide)([{ dist: 10, ds: new Date('2021-03-07T23:00:00') }]);
    expect(result).toBe(50);
});
test('Deve calcular o valor da corrida mínima.', function () {
    const result = (0, calculateRide_1.calculateRide)([{ dist: 3, ds: new Date('2021-03-01T10:00:00') }]);
    expect(result).toBe(10);
});
test('Deve retornar -1 se a distância for inválida.', function () {
    const result = (0, calculateRide_1.calculateRide)([{ dist: -3, ds: new Date('2021-03-01T10:00:00') }]);
    expect(result).toBe(-1);
});
test('Deve retornar -2 se a data for inválida.', function () {
    const result = (0, calculateRide_1.calculateRide)([{ dist: 10, ds: new Date('data_invalida') }]);
    expect(result).toBe(-2);
});
test('Deve retornar o valor da corrida em múltiplos horários.', function () {
    const result = (0, calculateRide_1.calculateRide)([
        { dist: 10, ds: new Date('2021-03-01T21:00:00') },
        { dist: 10, ds: new Date('2021-03-01T22:00:00') },
    ]);
    expect(result).toBe(60);
});
