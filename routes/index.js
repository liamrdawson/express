const express = require(`express`);
const router = express.Router();

router.get('/', (req, res) => {
    const name = req.cookies.username;
    if (name) {
        res.render('index', { name });
    } else {
        res.redirect(`/hello`);
    }
    
});

router.get('/cards', (req, res) => {
    res.render(`card`, { prompt: "What is Liam's favourite programming language?", hint: "It rhymes with lava crypt" });
});

router.get('/hello', (req, res) => {
    const name = req.cookies.username;
    if (name) {
        res.redirect('/');
    } else {
        res.render('hello');
    }
});

router.post('/hello', (req, res) => {
    res.cookie(`username`, req.body.username);
    res.redirect(`/`);
});

router.post('/goodbye', (req, res) => {
    res.clearCookie('username');
    res.redirect('/hello');
});

module.exports = router;