"use strict";
// const stringEcho = (args: string): string => {
//     return args;
// }
const echo = (args) => {
    return args;
};
console.log(echo("hello"));
console.log(echo(3546));
const isObj = (args) => {
    return typeof args === 'object' && !Array.isArray(args) && args !== null;
};
console.log(isObj({ name: "John", age: 30 }));
console.log(isObj(343));
console.log(isObj("hello"));
console.log(isObj(true));
console.log(isObj([]));
console.log(isObj(null));
console.log(isObj(undefined));
console.log(isObj(function () { }));
