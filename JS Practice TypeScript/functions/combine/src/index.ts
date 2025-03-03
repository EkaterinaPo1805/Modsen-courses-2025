function combine(string1: string, string2: string): string;
function combine(number1: number, number2: number): number;

function combine(arg1: string | number, arg2: string | number): string | number {
    return typeof arg1 === 'string' && typeof arg2 === 'string'
    ? arg1 + arg2 : typeof arg1 === 'number' && typeof arg2 === 'number'
    ? arg1 + arg2 : 'arguments aren\'t strings or numbers';
}

console.log(combine('Hel', 'lo'))
console.log(combine(2, 4))