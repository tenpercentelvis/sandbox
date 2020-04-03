/*
    If the first timeout resolves before the second timeout, the resolve c
*/

let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Second Dragon'), 1000);

    setTimeout(() => reject('No Dragon'), 1000);
});

promise.then(value => {
    console.log(value); //?
});

console.log('First Dragon!');
