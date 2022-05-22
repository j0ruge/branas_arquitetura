import { validateCpf } from "../../../src/exemplo02_cpf/after/cpf"

test('Deve validar um cpf válido', function () {
  const isValid = validateCpf('037.486.207-99');
  expect(isValid).toBeTruthy();
});

const wrongSameDigitCpf = [
  '111.111.111-11',
  '222.222.222-22',
  '333.333.333-33'
]

test.each(wrongSameDigitCpf)('Deve validar um cpf inválido com todos os números iguais', function (cpf) {
  const isValid = validateCpf(cpf);
  expect(isValid).toBeFalsy();
})

test('Deve validar um cpf inválido que seja', function () {
  const isValid = validateCpf(null);
  expect(isValid).toBeFalsy();
})

test('Deve validar um cpf válido sem pontos e traços', function () {
  const isValid = validateCpf('037.486.207-99');
  expect(isValid).toBeTruthy();
});

test('Deve validar um cpf válido com alguns pontos', function () {
  const isValid = validateCpf('037.486.207-99');
  expect(isValid).toBeTruthy();
});