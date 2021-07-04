import React, { useContext } from 'react';

import AppContext from '../context/AppContext';
import Map from '../components/Map';
import useGoogleAddres from '../hooks/useGoogleAddres';

import '../styles/components/Success.css';

export default function Success() {
  const {
    state: { buyer },
  } = useContext(AppContext);
  const location = useGoogleAddres(buyer[0].address);

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer.name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegara en 3 dias a tu dirección:</span>
        <div className="Success-map">
          <Map location={location} />
        </div>
      </div>
    </div>
  );
}
