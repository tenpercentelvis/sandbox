/*
    write a function that iterates over an array of strings and returns the top 10 most frequent strings in the list
*/

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// original array of Middle-earth peoples

const peoples = [
    'orc',
    'wizard',
    'ent',
    'hobbit',
    'dragon',
    'ent',
    'dragon',
    'wizard',
    'ent',
    'dwarf',
];

let count = {};
let mapped = [];
let sorted = [];
let sliced = [];

peoples.forEach(item => {
    count[item] ? (count[item] += 1) : (count[item] = 1);
});

// destrucute [name, value] = item

mapped = Object.entries(count).map(([name, value]) => {
    return { name, value };
});

// if a is less than b return a higher array index

sorted = mapped.sort((a, b) => {
    return a.value < b.value ? 1 : -1;
});

// slice 3 items from the start of the array starting index 0

sliced = sorted.slice(0, 3); //?

// map over sliced array returning only name

let reduced = sliced.map(item => item.name); //?

console.log(reduced);
