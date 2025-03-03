type defineType<T extends boolean> = T extends true ? string : number;

let elem1: defineType<true> = '';
let elem2: defineType<false> = 4;

console.log(typeof elem1);
console.log(typeof elem2);