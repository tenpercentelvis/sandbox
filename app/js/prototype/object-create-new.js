const objectCreate = () => {
    /*
        if userCreate is invoked with the new keyword,
        it automatically creates as empty object and assigns it to 'this' property inside the execution context of userCreate.
        In the empty object it has a hidden __proto__ property
        It links to the object part (combo) of the userCreator function...
        To it's prototype 'property' on the object part which is full of the functions we put in there

        this.name is then run to add a name propety to the auto created object to the value of the name argument passed in
        this.score is then run to add a name propety to the auto created object to the value of the score argument passed in

        Also new automatically returns the object assigned to the this keyword
    */

    function userCreator(name, score) {
        // automatically creates empty object if using the new ketword
        this.name = name;
        this.score = score;
        // automatically returns if using new keyword
    }

    userCreator.prototype.increment = function () {
        this.score++;
    };

    const user = new userCreator('Elvis', 0);

    user.increment();

    user.score; //?
};

objectCreate();

export default objectCreate;
