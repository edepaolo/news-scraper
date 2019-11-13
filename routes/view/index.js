var router = require("express").Router();
var db = require("../../models");

router.get('/', (req, res) => {
    db.Articles.find({saved:false})
    .sort({date:-1})
    .then((dbArticle) => {
        res.render('home', {articles:dbArticle})
    })
});

router.get('/saved', (req, res) => {
    db.Articles.find({saved:true})
    .sort({date:-1})
    .then((dbArticle) => {
        res.render('saved', {articles:dbArticle})
    })
});

module.exports = router