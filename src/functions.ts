function substract(num1: number, num2: number) {
    return num1 - num2;
}

type mathFunction = (a: number, b: number) => number;
// interface mathFunction { (a: number, b: number): number }

// function multiply(num1: number, num2: number): number {
//     return num1 * num2;
// }



let multiply: mathFunction = function (a, b) {
    return a * b;
}

console.log(multiply(2, 7));


function sumAll(num1: number, num2: number, num3?: number): number {      //optional parameter
    if (num3 === undefined) {
        return num1 + num2;
    }
    return num1 + num2 + num3
}
function addAll(num1: number = 10, num2: number, num3: number = 2): number {      //optional parameter
    return num1 + num2 + num3
}

console.log(sumAll(1, 3, 4));
console.log(addAll(undefined, 1));


// rest parameters
const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}


console.log(total(1, 2, 3, 4, 5, 6, 7));

// never return type
const createError = (errorMsg: string) => {
    throw new Error(errorMsg);
}

const infinite = () => {
    while (true) {
        console.log("infinite loop");
        break;
    }
}

// custom type gaurd
const isNumber = (value: any): boolean => {
    return typeof value === 'number' ? true : false;
}

console.log(isNumber("343"));


const numberOrString = (value: number | string): string => {
    if (typeof value === 'number') return "number"
    if (typeof value === "string") return "string"
    throw new Error("Invalid type") //never type
}
