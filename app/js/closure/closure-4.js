/*
    Set time out closes over var i
    the same i is used for each loop unless chage it to let
    (ver i = 1; i <= 5; i++) - (let i = 1; i <= 5; i++)
*/

const test = () => {
    const value = '1';

    return () => {
        console.log(value);
        return value; //?
    };
};

const value = test();

console.log(value());
