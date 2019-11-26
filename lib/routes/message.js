const { Router } = require('express');
const Message = require('../model/Message');

module.exports = Router()
  .post('/message', (req, res, next) => {
    const { message, username } = req.body;
    Message
      .create({ message, username })
      .then(message => {
        res.send(message);
      }) 
      .catch(next);
  })
  .get('/message', (req, res) => {
    res.send(req.user);
  });
