const objectCreate = () => {
    const userScore = {
        increment: function() {
            this.score++; // implicit this evaluates to user
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
