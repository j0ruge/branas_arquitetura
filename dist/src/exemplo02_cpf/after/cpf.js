"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCpf = void 0;
const FIRST_DIGIT_FACTOR = 10;
const SECOND_DIGIT_FACTOR = 11;
function validateCpf(rawCpf) {
    if (!rawCpf)
        return false;
    const cpf = cleanCpf(rawCpf);
    if (isInvalidLenght(cpf))
        return false;
    if (isIdenticalDigits(cpf))
        return false;
    let calculatedCheckDigit1 = calculateCheckDigit(cpf, FIRST_DIGIT_FACTOR);
    let calculatedCheckDigit2 = calculateCheckDigit(cpf, SECOND_DIGIT_FACTOR);
    let checkDigit = extractCheckDigits(cpf);
    const calculatedChackDigit = `${calculatedCheckDigit1}${calculatedCheckDigit2}`;
    return checkDigit === calculatedChackDigit;
}
exports.validateCpf = validateCpf;
function cleanCpf(cpf) {
    return cpf.replace(/\D/g, '');
}
function isInvalidLenght(cpf) {
    return cpf.length !== 11;
}
function isIdenticalDigits(cpf) {
    const [firstDigit] = cpf;
    return [...cpf].every(digit => digit === firstDigit);
}
function calculateCheckDigit(cpf, factor) {
    const total = [...cpf].reduce((total, digit) => {
        if (factor > 1)
            total += parseInt(digit) * factor--;
        return total;
    }, 0);
    const rest = total % 11;
    return (rest < 2) ? 0 : 11 - rest;
}
function extractCheckDigits(cpf) {
    const LAST_TWO_DIGITS = -2;
    return cpf.slice(LAST_TWO_DIGITS);
}
