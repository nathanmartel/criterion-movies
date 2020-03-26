const { Router } = require('express');
const Director = require('../models/Director');

module.exports = Router()
  .post('/', (req, res, next) => {
    Director
      .create(req.body)
      .then(director => res.send(director))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Director
      .findById(req.params.id)
      .then(director => res.send(director))
      .catch(next);
  })

  .patch('/:id', (req, res, next) => {
    Director
      .findByIdAndUpdate(req.params.id, { text: req.body.text }, { new: true })
      .then(director => res.send(director))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    Director
      .findByIdAndDelete(req.params.id)
      .then(director => res.send(director))
      .catch(next);
  });
