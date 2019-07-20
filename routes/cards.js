const express = require(`express`);
const router = express.Router();

router.get('/', (req, res) => {
    res.render(`card`, { prompt: "What is Liam's favourite programming language?", hint: "It rhymes with lava crypt" });
});

module.exports = router;