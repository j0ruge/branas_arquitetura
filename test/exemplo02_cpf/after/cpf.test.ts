import { validate } from "../../../src/exemplo02_cpf/before/cpf"

test('Deve validar um cpf válido', function () {
  const isValid = validate('037.486.207-99');
  expect(isValid).toBeTruthy();
});

test('Deve validar um cpf inválido com todos os números iguais', function () {
  const isValid = validate('111.111.111-11');
  expect(isValid).toBeFalsy();
})

test('Deve validar um cpf inválido que seja', function () {
  const isValid = validate(null);
  expect(isValid).toBeFalsy();
})