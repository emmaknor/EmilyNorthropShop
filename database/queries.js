const {Client} = require('pg')

const client = new Client ({
  user: 'emma',
  host: 'localhost',
  database: 'en',
  password: 'password',
  port: 5432,
})

client.connect()
.then(() => console.log('connected to Postgres!'))
.catch(e => console.error(e));

const getStock = (cb) => {
  client.query(`SELECT quantity FROM stock`, (err, stock) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, stock.rows);
    }
  })
}

const addTransaction = (transaction, cb) => {
  client.query(`INSERT INTO transactions(stripe_id,
    price,
    transaction_date,
    customer_name,
    customer_email) VALUES($1,
      $2,
      current_timestamp,
      $3,
      $4)`, [transaction.stripe_id, transaction.price,transaction.customer_name, transaction.customer_email], (err, res) => {
        if (err) {
          cb(err, null);
        } else {
          cb(null, 'success!');
        }
      })
}

const updateStock = (qty, cb) => {
  client.query(`UPDATE stock SET quantity = quantity - ${qty} where stock_id = 1`, (err, results) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, 'successfully decremented quantity!');
    }
  })
}


module.exports = {
  getStock,
  addTransaction,
  updateStock,
}
