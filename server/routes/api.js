var express = require('express');
var router = express.Router();
var FeedbackModel = require('../models/feedback');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/feedback', function(req, res, next) {
    FeedbackModel.find({},{name:1,emailid:1,read:1}, function(err,docs) {
      if (err) next(err)
      res.json(docs)
    })
})

router.get('/feedback/:id', function(req, res, next) {
    FeedbackModel.findById(req.params.id)
      .lean().then(docs => {
        res.json(docs);
      }).catch(err => {
        next(err)
      })
})

router.post('/feedback/:id/read', function(req, res, next) {
    FeedbackModel.findOneAndUpdate({_id : req.params.id}, { $set : { read:true } })
      .lean().then(() => {
        res.json({ msg : "success" });
      }).catch(err => {
        next(err)
      })
})

router.post('/feedback/:id/reply', (req ,res ,next) => {
    FeedbackModel.findById(req.params.id)
      .lean().then( (docs) => {
        docs.message = req.body.message
        res.json({ msg : "success" })
      }).catch(err => {
        next(err)
      })
})




module.exports = router;
