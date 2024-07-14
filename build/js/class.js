"use strict";
// class Coder {
//     // name: string
//     // music: string
//     // age: number
//     // lang: string
//     secondLang!: string
//     constructor(public readonly name: string, public music: string, private age: number, protected lang: string = "Typescript") {
//         // this.name = name
//         // this.music = music
//         // this.age = age
//         // this.lang = lang
//     }
//     public getAge() {
//         return `Hello, I'm ${this.age} old!`
//     }
// }
class Guitarist {
    constructor(name, instrument, music, age, isAvailable) {
        this.name = name;
        this.instrument = instrument;
        this.music = music;
        this.age = age;
        this.isAvailable = isAvailable;
    }
    play(value) {
        return `${this.name} is playing ${value}`;
    }
}
const Page = new Guitarist("Jimmy", "Guitar", "Lofi", 22, true);
console.log(Page.name);
console.log(Page.instrument);
console.log(Page.music);
console.log(Page.age);
console.log(Page.isAvailable);
console.log(Page.play("Rock"));
class Coder {
    constructor(name, age, language) {
        this.name = name;
        this.age = age;
        this.language = language;
    }
}
class WebDev extends Coder {
    constructor(computer, name, age, language = "Typescript") {
        super(name, age, language);
        this.computer = computer;
    }
    getLanguage() {
        return this.language;
    }
}
const webDev = new WebDev('mac', 'umrao', 20, "Javascript");
// console.log(webDev.computer);
// console.log(webDev.name);
// console.log(webDev.getLanguage());
// Static variable
class Peeps {
    constructor(name) {
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const peep1 = new Peeps("John");
// const peep2 = new Peeps("John");
console.log(`value of count is ${Peeps.count}`);
// Getter and Setter
class Bands {
    constructor() {
        this.dataState = [];
    }
    set data(values) {
        if (Array.isArray(values) && values.every((elem) => typeof elem === 'string')) {
            this.dataState = values;
        }
        else {
            throw new Error("Invalid Array Given");
        }
    }
    get data() {
        return this.dataState;
    }
}
const bands = new Bands();
bands.data = ["Queen", "AC/DC", "Led Zeppelin"];
console.log(bands.data);
