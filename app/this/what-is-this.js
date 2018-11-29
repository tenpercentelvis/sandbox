const button = {
    onClick: null,
};

const dragon = {
    element: 'fire',
    breathe: function(size) {
        return `${this.element} + ${size}`;
    },
};

button.onClick = dragon.breathe.bind(dragon);

button.onClick(); //?

dragon.breathe('medium'); //?
