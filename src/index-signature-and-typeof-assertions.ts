// index signature 
// typeof assertions


// interface TransactionObj {
//     readonly [index: string]: number
// }


interface TransactionObj {
    readonly [index: string]: number
    Pizza: number
    Books: number
    Job: number
    // umrao:"Hello"
}

const todaysTransaction: TransactionObj = {
    Pizza: 10,
    Books: 5,
    Job: 30,
    // Role: 64 
}

console.log(todaysTransaction.Books);
console.log(todaysTransaction['Pizza']);
console.log(todaysTransaction.Job);

const prop: string = 'Pizza';
console.log(todaysTransaction[prop]);

const todaysNet = (transactions: TransactionObj): number => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
}

console.log(todaysNet(todaysTransaction));

// todaysTransaction.Pizza = 30;

console.log(todaysTransaction['umrao']);




interface Student {
    // [key: string]: number | string | number[] | undefined
    name: string
    GPA: number,
    classes?: number[]
}

const student: Student = {
    name: "John",
    GPA: 7.9,
    classes: [100, 200]
}

// console.log(student.test);

for (const key in student) {
    console.log(`${key}:${student[key as keyof Student]}`)
}

Object.keys(student).map((key) => {
    console.log(`${student[key as keyof typeof student]}`);

})

// console.log(typeof Student);

const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`${key}:${student[key]}`);
}

// logStudentKey(student, 'GPA');


// interface Income{
//     [key: string]: number | string
// }

type Streams = 'salary' | 'bonus' | 'sidehustle'
type Incomes = Record<Streams, number | string>

const monthlyIncome: Incomes = {
    salary: 1000,
    bonus: '150',
    sidehustle: 100
}

for (const revenue in monthlyIncome) {
    console.log(`${revenue}:${monthlyIncome[revenue as keyof Incomes]}`)
}