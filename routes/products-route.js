const express = require('express');
const { restart } = require('nodemon');
const router = express.Router();
const data = require('../data');

//products route, GET displays all data
router.get('/', (req, res) => {
  res.send(data);
})

//products route, POST creates new product
router.post('/', (req, res) => {
  const newProduct = req.body;
  res.send(newProduct);
  console.log(newProduct);
})

//products route, PUT updates specified product
router.put('/:id', (req, res) => {
  const newArray = data.map(product => product.id === +req.params.id ? req.body : product);
  res.send(req.body);
  console.log(newArray);
})

//products route, DELETE deletes specified product
router.delete('/:id', (req, res) => {
  const filteredArray = data.filter(product => product.id !== +req.params.id);
  console.log(filteredArray);
  res.send(`Product with id ${req.params.id} has been deleted.`);
})

module.exports = router;