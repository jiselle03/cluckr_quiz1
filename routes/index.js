const router = require('express').Router();
const queries = require("../db/queries");

const ONE_DAY = new Date(Date.now() + 1000 * 60 * 60 * 24)

// Index/Home
router.get('/', (req, res) => {
    queries.getAll(req.params.id, {
        username: req.cookies.username,
        content: req.body.content,
        image_url: req.body.image_url
    }).then(clucks => {
        res.render('index', { clucks });
      });
});

// Sign In page route
router.get('/sign_in', (req, res) => {
    res.render('sign_in');
});

// Sign In POST route
router.post('/sign_in', (req, res) => {
    const { username, avatar } = req.body;
    res.cookie('username', username, { expires: ONE_DAY });
    res.cookie('avatar', avatar, { expires: ONE_DAY });
    res.redirect('/');
});

// Sign Out route
router.post('/sign_out', (req, res) => {
    res.clearCookie('username');
    res.redirect('/');
})

module.exports = router;