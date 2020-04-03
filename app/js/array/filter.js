import format from '../utilities/format';
import dragons from '../data/dragons';

console.log(dragons);

let fire = item => {
    return item.type === 'fire';
};

let fireDragon = dragons.filter(fire).map(item => item.name);

let test = dragons.find(item => {
    console.log(item);
});

console.log(format(fireDragon));
