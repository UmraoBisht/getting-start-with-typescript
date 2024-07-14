"use strict";
let a = "helo";
let b = a;
let c = a;
const addOrConcat = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    else if (c === 'concat') {
        return a.toString() + b.toString();
    }
    else {
        throw new Error('invalid operation');
    }
};
// 10 as string 
10;
// the DOM
const img = document.querySelector('img');
const img1 = document.getElementById('img');
const img3 = document.getElementById('#img');
img.src = 'https://picsum.photos/200/300';
img1.src;
img3.src;
