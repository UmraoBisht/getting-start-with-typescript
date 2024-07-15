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
// todaysTransaction.Pizza = 30;
console.log(todaysTransaction['umrao']);
const student = {
    name: "John",
    GPA: 7.9,
    classes: [100, 200]
};
// console.log(student.test);
for (const key in student) {
    console.log(`${key}:${student[key]}`);
}
Object.keys(student).map((key) => {
    console.log(`${student[key]}`);
});
// console.log(typeof Student);
const logStudentKey = (student, key) => {
    console.log(`${key}:${student[key]}`);
};
const monthlyIncome = {
    salary: 1000,
    bonus: '150',
    sidehustle: 100
};
for (const revenue in monthlyIncome) {
    console.log(`${revenue}:${monthlyIncome[revenue]}`);
}
