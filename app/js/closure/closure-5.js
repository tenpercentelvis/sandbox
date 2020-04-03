const createCounter = () => {
    let counter = 0;

    const update = instructions => {
        counter = instructions(counter);

        if (counter >= 3) {
            return 'Fully booked';
        }

        if (counter > 0) {
            return counter;
        }

        if (counter <= 0) {
            return 'Empty';
        }
    };

    return update;
};

const increment = item => item + 1;
const decrement = item => item - 1;

const counter = createCounter();

counter(increment); //?
counter(increment); //?
counter(increment); //?

counter(decrement); //?
counter(decrement); //?
counter(decrement); //?
