// if in development mode -
if (process.env.NODE_ENV !== 'production') {
  // load all variables in env file & put them in process.env in server to access API keys
  require('dotenv').config()
}

const secretKey = process.env.STRIPE_SECRET_KEY
const publicKey = process.env.STRIPE_PUBLIC_KEY
const stripe = require('stripe')(secretKey);
const express = require('express');
const path = require('path');
const queries = require('../database/queries.js');
const { uuid } = require('uuidv4');
const app = express();
const cors = require('cors');

// set template for front-end rendering & serve up static files
// app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '..', 'public')));

// middleware
app.use(express.json());
app.use(cors());

app.get('/stock', (req, res) => {
  queries.getStock((err, stock) => {
    if (err) {
      console.error(err);
      res.status(404).send(err);
    } else {
      res.status(200).send(stock);
    }
  })
});

app.put('/stock', (req, res) => {
  queries.updateStock(req.body.count, (err, stock) => {
    if (err) {
      console.error(err);
      res.status(400).send(err);
    } else {
      res.status(202).send('updated stock!');
    }
  })
})

app.post('/checkout', async (req, res) => {
  let error;
  let status;
  try {
    const { token } = req.body;

    // create customer with stripe using users email & id from frontend
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id
    });

    // create unique idempotency key to ensure user is not charged twice
    const idempotencyKey = uuid();
    // create charge with stripe
    const charge = await stripe.charges.create(
      {
        amount: (req.body.count * 30) * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchased a deck of affirmation cards`,
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip
          }
        }
      },
      {
        idempotencyKey
      }
    );
    console.log("Charge:", { charge });
    status = "success";
  } catch (error) {
    console.error("Error:", error);
    status = "failure";
  }

  res.json({ error, status });
});

app.post('/transaction', (req, res) => {
  queries.addTransaction(req.body.transaction, (err, response) => {
    if (err) {
      console.error(err);
      res.status(400).send(err);
    } else {
      res.status(200).send('transaction recorded!');
    }
  })
})

// port where server listens
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening at localhost:${PORT}`);
});
