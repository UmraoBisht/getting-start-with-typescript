type one = string
type two = string | number
type three = "hello"

let a: one = "helo"
let b = a as two;
let c = a as three;

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') {
        return a + b
    }
    else if (c === 'concat') {
        return a.toString() + b.toString()
    } else {
        throw new Error('invalid operation')
    }
}

// 10 as string 
(10 as unknown) as string

// the DOM
const img = document.querySelector('img')!;
const img1 = document.getElementById('img') as HTMLImageElement;
const img3 = <HTMLImageElement>document.getElementById('#img');

img.src = 'https://picsum.photos/200/300'
img1.src
img3.src
