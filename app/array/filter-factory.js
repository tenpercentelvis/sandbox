
let animals = [
  { name: 'fluffykins', type: 'rabbit' },
  { name: 'tom', type: 'cat' },
  { name: 'whiskers', type: 'cat' },
  { name: 'harry', type: 'dog' }
];

let filterAnimal = (type) => {
  return (item) => {
    return item.type === type;
  };
}

let animal = animals.filter(filterAnimal('cat')).map(x => x.name);


console.log(animals);
console.log(animal);
