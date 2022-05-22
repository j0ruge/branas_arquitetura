"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cpf_1 = require("../../../src/exemplo02_cpf/after/cpf");
test('Deve validar um cpf válido', function () {
    const isValid = (0, cpf_1.validate)('037.486.207-99');
    expect(isValid).toBeTruthy();
});
const wrongSameDigitCpf = [
    '111.111.111-11',
    '222.222.222-22',
    '333.333.333-33'
];
test.each(wrongSameDigitCpf)('Deve validar um cpf inválido com todos os números iguais', function (cpf) {
    const isValid = (0, cpf_1.validate)(cpf);
    expect(isValid).toBeFalsy();
});
test('Deve validar um cpf inválido que seja', function () {
    const isValid = (0, cpf_1.validate)(null);
    expect(isValid).toBeFalsy();
});
test('Deve validar um cpf válido sem pontos e traços', function () {
    const isValid = (0, cpf_1.validate)('037.486.207-99');
    expect(isValid).toBeTruthy();
});
test('Deve validar um cpf válido com alguns pontos', function () {
    const isValid = (0, cpf_1.validate)('037.486.207-99');
    expect(isValid).toBeTruthy();
});
