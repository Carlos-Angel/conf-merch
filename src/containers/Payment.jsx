import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button';

import config from '../config';
import AppContext from '../context/AppContext';
import handleSumTotal from '../utils/handleSumTotal';

import '../styles/components/Payment.css';

export default function Payment() {
  const {
    state: { cart, buyer },
    addNewOrder,
  } = useContext(AppContext);

  const history = useHistory();

  const paypalOptions = {
    clientId: config.clientIdPaypal,
    intent: 'capture',
    currency: 'MXN',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        products: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      history.push('/checkout/success');
    }
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.id}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal(cart)}
            // onPaymentStart={() => console.log('Start Payment')}
            onPaymentSuccess={handlePaymentSuccess}
            // onPaymentError={(error) => console.error('paypal error', error)}
            // onPaymentCancel={(data) => console.log('paypal cancel', data)}
          />
        </div>
      </div>
    </div>
  );
}
