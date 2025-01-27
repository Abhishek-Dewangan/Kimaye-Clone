const express = require('express');
const dotenv = require('dotenv');
const fruitsRouter = require('./routes/Products_route');
const userRouter = require('./routes/User_route');
const cors = require('cors');
const cartRouter = require('./routes/Cart.route');

dotenv.config({path: './config.env'});

const connection = require('./DB/db');
const paymentRouter = require('./routes/payment_route');
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.use('/', fruitsRouter);
app.use('/cart', cartRouter);
app.use('/auth', userRouter);
app.use('/payment', paymentRouter);

app.get('/', (req, res) => {
  res.send('App Working');
});

app.listen(PORT, async () => {
  await connection;
  console.log('Server started at http://localhost:8080');
});
