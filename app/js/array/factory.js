import dragons from '../data/dragons';

let factory = type => {
    return item => {
        return item.type === type;
    };
};

let dragon = dragons.filter(factory('ice')).map(x => x.name);

console.log(dragon);
