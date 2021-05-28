import React, { useState, useEffect } from 'react';
import {
  Container, Row, Col, Modal, Button,
} from 'react-bootstrap';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import logo from '../imgs/logo.png';
import ProductOV from './ProductOV.jsx';
import Details from './Details.jsx';

toast.configure();

const App = () => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const [stock, setStock] = useState(0);

  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  async function handleToken(token, addresses) {
    const response = await axios.post('/checkout', {token, count});
    const status = response.data;
    console.log(status);
    if (status.status === 'success') {
      toast('Success! Check email for details', { type: 'success'})
      recordTransaction(token, addresses);
      updateStock();
    } else {
      toast('There was an issue proccessing your payment :(', { type: 'error'})
    }
  }

  async function recordTransaction(t, a) {
    // console.log(t);
    // console.log(a);
    let transaction = {
      stripe_id: t.id,
      price: ((count * 30) * 100),
      customer_name: a.billing_name,
      customer_email: t.email
    }
    console.log(transaction);
    const res = await axios.post('/transaction', {transaction});
  }

  async function updateStock() {
    const message = await axios.put('/stock', {count});
    const data = message.data;
  }

  const getStock = () => {
    axios.get('/stock')
    .then(res => setStock(res.data[0].quantity))
  }

  const incrementQty = () => { count <= stock && setCount(count + 1) };
  const decrementQty = () => { count >= 1 && setCount(count - 1) };

  useEffect(() => {
    getStock();
  }, []);

  return (
    <>
    <Container>
        <div>
          <div className="cart-text" onClick={handleOpen}>cart ({count})</div>
          <Modal
            show={show}
            onHide={handleClose}
          >
            <Modal.Header closeButton >
            <Modal.Title>Shopping Cart</Modal.Title>
              </Modal.Header>
            <Modal.Body>
              <div>
              <table>
                <tr>
                  <th>Item</th>
                  <th>Price</th>
                  <th>Quantity</th>
                </tr>
                <tr>
                  <th>Affirmation Card Deck</th>
                  <th>
                      <div>$30</div>
                    </th>
                  <th className="qty">
                  <span className="decrement"
                  onClick={decrementQty}>&#8722;</span>
                    {count}
                    <span className="increment"
                    onClick={incrementQty}>&#43;</span>
                    {/* <Button
                    className="remove"
                    variant="outline-secondary"
                    >REMOVE</Button> */}
                  </th>
                </tr>
              </table>
                <div className="total-price">
                      <div>Total: ${count * 30}</div>
                    </div>
                <div className="purchase">
                {/* <Button
                    className="purchase-btn"
                    variant="outline-secondary"
                    // onClick={stripeModal}
                    >PURCHASE</Button> */}
                {
                  count > 0 &&
                <StripeCheckout
                  className="purchase-btn"
                  stripeKey="pk_test_51Iap1XEL079pdX548eh7j2H58qIyR8MLaF3m4vLn1k0SYARG9qzGRhKrN9drde1GjV4ukHo5xdYU7CbweQSYuepq00YAgy8V7L"
                  token={handleToken}
                  billingAddress
                  shippingAddress
                  amount={(count * 30) * 100}
                  name="Affirmation Card Deck"
                />
                }
                </div>
              </div>
            </Modal.Body>
          </Modal>
          <img src={logo} className="logo"/>
        </div>
      <Row>
        <Col xs={12} s={12} md={9} lg={7}>
          <ProductOV />
        </Col>
        <Col xs={12} s={12} md={3} lg={5}>
          <Details stock={stock} setCount={setCount}/>
        </Col>
      </Row>
    </Container>
    </>
  );

}

export default App;
