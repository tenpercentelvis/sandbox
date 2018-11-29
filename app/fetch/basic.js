import fetch from 'node-fetch';

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())

    .then(post => post.id)

    .then(x => console.log(x));
