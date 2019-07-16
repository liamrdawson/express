const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>It is alivvvee!!</h1>');
});

app.get('/hello', (req, res) => {
    res.send(`<h1>Hello, is it me you're coding for!?</h1>`);
});

app.listen(3000, () => {
    console.log('The application is running on localhost:3000')
});