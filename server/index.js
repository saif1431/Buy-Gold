const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const stripe = require('stripe')('your-stripe-secret-key');
const paypal = require('@paypal/checkout-server-sdk');
const auth = require('./auth');
const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose
.connect("mongodb+srv://sherazmoiz9:FMGxSK0XXAOR42S0@cluster0.l6qfsrz.mongodb.net/", {
})
.then((data) => {
  console.log(`Mongodb connected with server: ${data.connection.host}`);
});

const User = mongoose.model('User', new mongoose.Schema({
  email: String,
  password: String,
}));

const Message = mongoose.model('Message', new mongoose.Schema({
  email: String,
  category: String,
  message: String,
}));

const Payment = mongoose.model('Payment', new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  amount: Number,
  paymentMethod: String,
  paymentId: String,
}));

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Stripe Payment Endpoint
app.post('/stripe-payment', auth, async (req, res) => {
  const { amount } = req.body;
  const userId = req.user.id;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
    });

    const payment = new Payment({
      userId,
      amount,
      paymentMethod: 'stripe',
      paymentId: paymentIntent.id,
    });

    await payment.save();

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// PayPal Payment Endpoint
const paypalClient = new paypal.core.PayPalHttpClient(
  new paypal.core.SandboxEnvironment('your-paypal-client-id', 'your-paypal-client-secret')
);

app.post('/paypal-payment', auth, async (req, res) => {
  const { amount } = req.body;
  const userId = req.user.id;

  const request = new paypal.orders.OrdersCreateRequest();
  request.prefer("return=representation");
  request.requestBody({
    intent: 'CAPTURE',
    purchase_units: [{
      amount: {
        currency_code: 'USD',
        value: amount.toString(),
      },
    }],
  });

  try {
    const order = await paypalClient.execute(request);
    const payment = new Payment({
      userId,
      amount,
      paymentMethod: 'paypal',
      paymentId: order.result.id,
    });

    await payment.save();

    res.send({
      orderId: order.result.id,
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// User signup endpoint
app.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ email, password: hashedPassword });
  await user.save();
  res.status(201).send({ message: 'User created' });
});

// User login endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).send({ message: 'Invalid email or password' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).send({ message: 'Invalid email or password' });

  const token = jwt.sign({ id: user._id }, 'secretkey', { expiresIn: '1h' });
  res.send({ token });
});

// Support form endpoint
app.post('/support', async (req, res) => {
  const { email, category, message } = req.body;
  const newMessage = new Message({ email, category, message });
  await newMessage.save();
  res.status(201).send({ message: 'Message received' });
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
