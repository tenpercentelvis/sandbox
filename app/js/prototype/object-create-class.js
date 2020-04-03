const objectCreate = () => {
    class userCreator {
        constructor(name, score) {
            this.name = name;
            this.score = score;
        }

        increment = function() {
            this.score++;
        };
    }

    const user = new userCreator('Elvis', 0);

    user.increment();

    user.score; //?
};

objectCreate();

export default objectCreate;
