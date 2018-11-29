let animals = [
    { name: 'fluffykins', type: 'rabbit' },
    { name: 'tom', type: 'cat' },
    { name: 'whiskers', type: 'cat' },
    { name: 'harry', type: 'dog' },
];

let isCat = item => {
    return item.type === 'cat';
};

let cats = animals.filter(isCat).map(x => x.type);

console.log(cats);
