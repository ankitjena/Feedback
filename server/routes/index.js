var express = require('express');
var router = express.Router();
const FeedbackModel = require('../models/feedback');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/feedback')
});

router.get('/feedback', function(req, res, next) {
  res.render("./feedback")
})

router.post("/feedback", (req, res) => {
  console.log(req.body);
  var myData = new FeedbackModel(req.body);
  myData.save()
    .then(item => {
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
    res.redirect("/feedback")
});

module.exports = router;
