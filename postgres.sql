DROP DATABASE IF EXISTS en;

CREATE DATABASE en;

\c en

CREATE TABLE IF NOT EXISTS transactions (
  transaction_id SERIAL,
  stripe_id VARCHAR(75),
  price INTEGER,
  transaction_date TIMESTAMP,
  customer_name VARCHAR(50),
  customer_email VARCHAR(75),
  PRIMARY KEY(transaction_id)
 );

CREATE TABLE IF NOT EXISTS stock (
  stock_id SERIAL,
  quantity INTEGER,
  PRIMARY KEY(stock_id)
 );
