/*
    Passing a function as a callback
*/

function dragon() {
    let type = 'fire';
    let size = 'large';
    let magic = '10';

    let createDragon = function() {
        return {
            size,
            type,
            magic,
        };
    };

    fireDragon(createDragon);
}

function fireDragon(createDragon) {
    createDragon(); //?
}

dragon();
