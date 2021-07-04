import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import AppContext from '../context/AppContext';

import handleSumTotal from '../utils/handleSumTotal';
import MetaHead from '../components/MetaHead';
import '../styles/components/Checkout.css';

export default function Checkout() {
  const {
    state: { cart },
    removeFromCart,
  } = useContext(AppContext);

  const handleRemove = (product) => () => {
    removeFromCart(product);
  };

  return (
    <>
      <MetaHead
        title="Lista de productos"
        description="Revista tus productos favoritos"
        image="https://bucket-public-carlos-angel.s3.us-east-2.amazonaws.com/platziconf/logo.pagina-web.png"
        url="https://conf-merch-b592f.firebaseapp.com/checkout"
      />
      <div className="Checkout">
        <div className="Checkout-content">
          {cart.length > 0 ? (
            <h3>Lista de pedidos</h3>
          ) : (
            <h3>Sin pedidos...</h3>
          )}
          {cart.map((item) => (
            <div className="Checkout-item">
              <div className="Checkout-element">
                <h4>{item.title}</h4>
                <span>$ {item.price}</span>
              </div>
              <button type="button" onClick={handleRemove(item)}>
                <i className="fas fa-trash-alt" />
              </button>
            </div>
          ))}
        </div>
        {cart.length > 0 && (
          <div className="Checkout-sidebar">
            <h3>{`precio total: $ ${handleSumTotal(cart)}`}</h3>
            <Link to="/checkout/information">
              <button type="button">Continuar pedido</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
