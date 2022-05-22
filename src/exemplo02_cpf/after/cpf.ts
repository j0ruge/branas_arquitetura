const FIRST_DIGIT_FACTOR = 10;
const SECOND_DIGIT_FACTOR = 11;

export function validate(rawCpf: string | null | undefined) {
    if (!rawCpf) return false;
    const cpf = cleanCpf(rawCpf);
    if (isInvalidLenght(cpf)) return false;
    if (isIdenticalDigits(cpf)) return false;  
    let calculatedCheckDigit1 = calculateCheckDigit(cpf, FIRST_DIGIT_FACTOR);
    let calculatedCheckDigit2 = calculateCheckDigit(cpf, SECOND_DIGIT_FACTOR);
    let checkDigit = extractCheckDigits(cpf);
    const calculatedChackDigit = `${calculatedCheckDigit1}${calculatedCheckDigit2}`;
    return checkDigit === calculatedChackDigit; 
}

function cleanCpf (cpf: string) {
    return cpf.replace(/\D/g, '');
}

function isInvalidLenght(cpf: string ) {
    return cpf.length !== 11;
}

function isIdenticalDigits(cpf: string) {
    const [firstDigit] = cpf
    return [...cpf].every(digit => digit === firstDigit);
}

function calculateCheckDigit (cpf: string, factor: number) {
    let total = 0;
    for (const digit of cpf) {
        if (factor > 1 ) total += parseInt(digit) * factor--
    }
    const rest = total%11;
    return (rest < 2) ? 0 : 11 - rest;
}

function extractCheckDigits(cpf: string) {
    const LAST_TWO_DIGITS = -2;
    return cpf.slice(LAST_TWO_DIGITS);
}