const express   = require(`express`);
const router    = express.Router();
const { data }  =  require(`../data/flashcardData.json`);
const { cards } = data;

router.get('/', (req, res) => {
    res.render(`card`, { 
        prompt: cards[0].question, 
        hint: cards[0].hint });
});

module.exports = router;