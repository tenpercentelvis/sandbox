const fetch = require('node-fetch');

const promises = () => {
    function display(data) {
        console.log(data);
    }

    function error(error) {
        console.log('error', error);
    }

    function hello() {
        console.log('Hello');
    }

    function block() {
        for (let i = 0; i < 10000; i++) {
            // console.log('blocking');
        }
    }

    setTimeout(hello, 0);

    const futureData = fetch('https://jsonplaceholder.typicode.com/todos/1');

    futureData
        .then(response => response.json())
        .then(display)
        .catch(err => console.log(err));

    block();

    console.log('Me first!!');
};

// promises();

export default promises;
