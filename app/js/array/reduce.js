import dragons from '../data/dragons';

const magic = (sum, item) => {
    return sum + item.magic; //?
};

const totalMagic = dragons.reduce(magic, 0);

console.log(totalMagic);
