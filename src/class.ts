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

// class JuniorCoder extends Coder {

//     constructor(
//         public computer: string,
//         music: string,
//         age: number,
//         lang: string = 'Javascript'
//     ) {
//         super("JuniorCoder", "Rock", 20, "Javascript")
//     }
//     public getLang() {
//         return `I'm a Junior Coder.I have Deep Understanding of ${this.lang}`
//     }
// }
// const Umrao = new Coder("umrao", "hip-hop", 20)
// const Umrao2 = new JuniorCoder("umrao", "hip-hop", 20)
// // console.log(Umrao.getAge());
// // console.log(Umrao.age);
// // console.log(Umrao.music);
// // console.log(Umrao.lang);
// // console.log(Umrao.secondLang)
// console.log(Umrao2.getAge());
// // console.log(Umrao2.age);
// console.log(Umrao2.music);
// console.log(Umrao2.getLang());
// console.log(Umrao2.secondLang)




// Interface

interface Musician {
    name: string
    instrument: string
    music: string
    age: number
    play(action: string): string
}

class Guitarist implements Musician {
    name: string
    instrument: string
    music: string
    age: number
    isAvailable: boolean
    constructor(
        name: string,
        instrument: string,
        music: string,
        age: number,
        isAvailable: boolean
    ) {
        this.name = name
        this.instrument = instrument
        this.music = music
        this.age = age
        this.isAvailable = isAvailable
    }
    play(value: string): string {
        return `${this.name} is playing ${value}`;
    }
}

const Page = new Guitarist("Jimmy", "Guitar", "Lofi", 22, true)
console.log(Page.name);
console.log(Page.instrument);
console.log(Page.music);
console.log(Page.age);
console.log(Page.isAvailable);
console.log(Page.play("Rock"));



class Coder {
    constructor(public name: string, private age: number, protected language: string) {
    }
}
class WebDev extends Coder {
    constructor(public computer: string, name: string, age: number, language: string = "Typescript") {
        super(name, age, language);
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
    static count: number = 0;
    public id: number;
    constructor(public name: string) {
        this.id = ++Peeps.count;
    }
}

const peep1 = new Peeps("John");
// const peep2 = new Peeps("John");
console.log(`value of count is ${Peeps.count}`);



// Getter and Setter
class Bands {
    private dataState: string[];
    constructor() {
        this.dataState = []
    }

    set data(values: string[]) {
        if (Array.isArray(values) && values.every((elem) => typeof elem === 'string')) {
            this.dataState = values;
        } else {
            throw new Error("Invalid Array Given");
        }
    }
    public get data() {
        return this.dataState;
    }
}

const bands = new Bands();
bands.data = ["Queen", "AC/DC", "Led Zeppelin"];
console.log(bands.data);
