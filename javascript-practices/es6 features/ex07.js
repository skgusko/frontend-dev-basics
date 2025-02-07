/*
    Array's Iteration Methods

    - forEach
    - map
    - filter
    - every
    - some
    - reduce
    - reduceRight
*/

const  a = [1, 2, 3, 4, 5]

// Array 함수 - forEach
a.forEach((e, i) => process.stdout.write(`${i}:${e}\t`));

// Array 함수 - map
const a2 = a.map((e) => e*e);
console.log(a2);

// Array 함수 - filter
const a3 = a.filter((e) => e % 2 !== 0);
console.log(a3);

// Array 함수 - find
const index = a.findIndex(e => e === 4);
console.log(index);

// Array 함수 - every
const result = a.every((e) => e < 10);
console.log(result);

// Array 함수 - some
const result2 = a.some(e => e % 5 === 0);
console.log(result2);

// Array 함수 - reduce
let sum = 0;
a.forEach(e => sum += e);
console.log(sum);

const a4 = a.reduce((acc, e) => acc.concat(e*e), []); //배열의 각 요소를 제곱한 후 새로운 배열 생성
console.log(a4);

// Array 함수 - reduceRight
const a5 = a.reduceRight((acc, e) => acc.concat(e*e), []);
console.log(a5);
