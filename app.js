const express = require('express');
const app = express();

  

app.set(`view engine`, `pug`);

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/cards', (req, res) => {
    res.render(`card`, { prompt: "What is Liam's favourite programming language?", hint: "It rhymes with lava crypt" });
});

app.get('/hello', (req, res) => {
    res.render(`hello`);
});

app.post('/hello', (req, res) => {
    res.render(`hello`);
});

app.listen(3000, () => {
    console.log('The application is running on localhost:3000')
});