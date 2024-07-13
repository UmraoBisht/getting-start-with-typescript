let stringArr = ["one", "hey", "umrao"]
let stringArr2 = ["1", "2", "3", 5776]
let stringArr3 = ["one", "hey", "umrao", true, 4587]
let stringArrrr = ["d", "rt", "rt", "trt"];

stringArr[0] = "45";
stringArr.push("hey");
stringArr3 = stringArrrr;

let brands: string[] = [];


// tuple
let mytuple: [string, number, boolean] = ["umrao", 43, true]
let mixed: [string, number, boolean] = ["umrao", 43, false];
mytuple = mixed;

//object
let myObject: object;
myObject = [];
myObject = {}
myObject = brands
myObject = mixed


const exampleObject = {
    prop1: "data",
    prop2: 45,
    prop3: true,
}

exampleObject.prop2 = 454

type Guitarist = {
    name?: string,
    age: number,
    instrunment: string,
    isPlayable: (boolean | number)[]
}

let guitarist: Guitarist = {
    name: "Umrao bisht",
    age: 546,
    instrunment: "guitar",
    isPlayable: [true, 1]
}
let guitar: Guitarist = {
    name: "umrao",
    age: 546,
    instrunment: "guitar",
    isPlayable: [true, 1]
}

// guitar = guitarist;

const greetGuitarist = (guitarist: Guitarist) => {
    if (guitarist.name) {
        return console.log(`Hello, ${guitarist.name.toLowerCase()}!`)
    }
    return "Hello!"

}

console.log(greetGuitarist(guitar));


// Enums
// "unlike most Typescript features, Enums are not a type-level additon to javascript but something added to the language and runtime."



const add = (num1: number, num2: number) => {
    return num1 + num2
}

const logMessage = (message: any) => {
    console.log(message);
}

logMessage(45);
logMessage(add(5, 6));


