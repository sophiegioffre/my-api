const express = require('express');
const serverPort = 5000;
const app = express();
const productsRouter = require('./routes/products-route');

app.use(express.json());
app.use('/products', productsRouter);

//index route, GET displays data
app.get('/', (req, res) => {
  res.send(`Welcome To Our API!`);
});

app.listen(serverPort, () => console.log(`Express server is running on port ${serverPort}`));