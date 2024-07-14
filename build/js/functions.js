"use strict";
function substract(num1, num2) {
    return num1 - num2;
}
// interface mathFunction { (a: number, b: number): number }
// function multiply(num1: number, num2: number): number {
//     return num1 * num2;
// }
let multiply = function (a, b) {
    return a * b;
};
console.log(multiply(2, 7));
function sumAll(num1, num2, num3) {
    if (num3 === undefined) {
        return num1 + num2;
    }
    return num1 + num2 + num3;
}
function addAll(num1 = 10, num2, num3 = 2) {
    return num1 + num2 + num3;
}
console.log(sumAll(1, 3, 4));
console.log(addAll(undefined, 1));
// rest parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
console.log(total(1, 2, 3, 4, 5, 6, 7));
// never return type
const createError = (errorMsg) => {
    throw new Error(errorMsg);
};
const infinite = () => {
    while (true) {
        console.log("infinite loop");
        break;
    }
};
// custom type gaurd
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
console.log(isNumber("343"));
const numberOrString = (value) => {
    if (typeof value === 'number')
        return "number";
    if (typeof value === "string")
        return "string";
    throw new Error("Invalid type"); //never type
};
