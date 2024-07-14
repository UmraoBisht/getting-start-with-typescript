// index signature 
// typeof assertions

// interface TransactionObj {
//     Pizza: number
//     Books: number
//     Job: number
// }
interface TransactionObj {
    [index: string]: number
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



