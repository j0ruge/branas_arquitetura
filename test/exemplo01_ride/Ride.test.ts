import NormalFareCalculator from '../../src/exemplo01_ride/NormalFareCalculator';
import OvernightFareCalculator from '../../src/exemplo01_ride/OvernightFareCalculator';
import OvernightSundayFareCalculator from '../../src/exemplo01_ride/OvernightSundayFareCalculator';
import Ride from '../../src/exemplo01_ride/Ride';
import SundayFareCalculator from '../../src/exemplo01_ride/SundayFareCalculator';

let ride: Ride;

/**
 * Utilizando o padrão CHAIN OF RESPONSABILITY * 
 * 
 */

beforeEach(function () {
  const normalFareCalculator = new NormalFareCalculator();
  const sundayFareCalculator = new SundayFareCalculator(normalFareCalculator);
  const overnightSundayFareCalculator = new OvernightSundayFareCalculator(sundayFareCalculator);
  const overnightFareCalculator = new OvernightFareCalculator(overnightSundayFareCalculator);
  ride = new Ride(overnightFareCalculator);
})

test('Deve calcular o valor da corrida em horário normal', function () {
  ride.addSegment(10, new Date('2021-03-01T10:00:00'));     
  const fare = ride.finish();
  expect(fare).toBe(21);
});

test('Deve calcular o valor da corrida em horário noturno', function () {
  ride.addSegment(10, new Date('2021-03-01T23:00:00'))
  const fare = ride.finish();
  expect(fare).toBe(39);
});

test('Deve calcular o valor da corrida em horário no domingo', function () {
  ride.addSegment(10, new Date('2021-03-07T10:00:00'))
  const fare = ride.finish()
  expect(fare).toBe(29);
});

test('Deve calcular o valor da corrida em horário no domingo', function () {
  ride.addSegment(10, new Date('2021-03-07T23:00:00'))
  const fare = ride.finish()
  expect(fare).toBe(50);
});

test('Deve calcular o valor da corrida mínima.', function () {
  ride.addSegment(3, new Date('2021-03-01T10:00:00'))
  const fare = ride.finish()
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