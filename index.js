const express = require('express');
const serverPort = 5000;
const app = express();

//import data
const data = require('./data.js');

app.use(express.json());

//define API routes
//index route, GET displays data
app.get('/', (req, res) => {
  res.send(data);
});

//products route, POST creates new product
app.post('/products', (req, res) => {
  const newProduct = req.body;
  console.log(newProduct);
})

//products route, PUT updates specified product
app.put('/products/:id', (req, res) => {
  const newArray = data.map(product => product.id === +req.params.id ? req.body : product);
  res.send(req.body);
  console.log(newArray);
})

app.listen(serverPort, () => console.log(`Express server is running on port ${serverPort}`));