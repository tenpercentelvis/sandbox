import fruit from '../data/fruit';

const test = fruit;

test.map(item => {
    console.dir(item);
});

let entries = Object.entries(fruit);

entries[0].map(item => console.dir(item.name));
