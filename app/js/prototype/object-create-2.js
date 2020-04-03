const objectCreate = () => {
    const userScore = {
        increment: function() {
            // using arrow function to set 'this' property to the environment where it was created
            const add = () => {
                this.score++;
            };
            add();

            // older way to set this property
            // function add() {
            //     this.score++;
            // }
            // add.call(this);
        },
    };

    const createUser = (name, score) => {
        const newUser = Object.create(userScore);

        newUser.name = name;
        newUser.score = score;

        return newUser;
    };

    const user = createUser('Elvis', 0);

    user.increment();

    user.score; //?
};

objectCreate();

export default objectCreate;
