import fetch from 'node-fetch';

const fetchStuff = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())

        .then(post => {
            console.log(post);

            return post.title;
        })

        .then(x => console.log(x));
};

// fetchStuff();

export default fetchStuff;
