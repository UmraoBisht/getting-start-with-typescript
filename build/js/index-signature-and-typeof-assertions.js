"use strict";
// index signature 
// typeof assertions
const todaysTransaction = {
    Pizza: 10,
    Books: 5,
    Job: 30,
    // Role: 64 
};
console.log(todaysTransaction.Books);
console.log(todaysTransaction['Pizza']);
console.log(todaysTransaction.Job);
const prop = 'Pizza';
console.log(todaysTransaction[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransaction));
