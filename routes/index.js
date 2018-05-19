var express = require('express');
var router = express.Router();

var Meeting = require('../model/meeting');
var NotMission = require('../model/notMission');
var Feedback = require('../model/feedback');

/* GET meeting. */
router.get('/meeting', function(req, res, next) {
  Meeting.find(function(err,resut){
    if (err){
        return res.send(err);
    }

    res.json(resut);

});
});

router.get('/notMission', function(req, res, next) {
  NotMission.find(function(err,resut){
    if (err){
        return res.send(err);
    }

    res.json(resut);

});
});

router.get('/feedback', function(req, res, next) {
  Feedback.find(function(err,resut){
    if (err){
        return res.send(err);
    }

    res.json(resut);

});
});


router.post('/meeting', function(req, res, next){

  if(req.body.name && req.body.email && req.body.tel && req.body.message){

    var meeting = new Meeting({
      name:  req.body.name,
      email :  req.body.email,
      tel :  req.body.tel,
      message :  req.body.message,
  });
  
  meeting.save(function(err){
      if (err){
          return res.send(err);
      }
  
      res.send({status: 200 ,message :'Meeting added'});
  });
  }else{
    res.send({status: 500, message :'Form error'});
  }

  
});

router.post('/notMission', function(req, res, next){

  if(req.body.email){

    var notMission = new NotMission({
      email :  req.body.email,
  });
  
  notMission.save(function(err){
      if (err){
          return res.send(err);
      }
  
      res.send({status: 200 ,message :'email added'});
  });
  }else{
    res.send({status: 500, message :'Form error'});
  }

  
});


router.post('/feedback', function(req, res, next){

  if(req.body.message){

    var feedback = new Feedback({
      message :  req.body.message,
  });
  
  feedback.save(function(err){
      if (err){
          return res.send(err);
      }
  
      res.send({status: 200 ,message :'Feedback added'});
  });
  }else{
    res.send({status: 500, message :'Form error'});
  }

  
});

module.exports = router;
