import React from 'react';

import '../styles/components/Information.css';

export default function Information() {
  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto</h2>
        </div>
        <div className="Information-form">
          <form action="" method="post">
            <input type="text" name="name" placeholder="Nombre completo" />
            <input type="email" name="email" placeholder="Correo electrónico" />
            <input type="text" name="address" placeholder="Dirección" />
            <input type="text" name="apto" placeholder="Apto" />
            <input type="text" name="city" placeholder="Ciudad" />
            <input type="text" name="country" placeholder="País" />
            <input type="text" name="state" placeholder="Estado" />
            <input type="number" name="cp" placeholder="Código postal" />
            <input type="text" name="phone" placeholder="Teléfono" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">Regresar</div>
          <div className="Information-next">Pagar</div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        <div className="Information-item">
          <div className="Information-element">
            <h4>Item Name</h4>
            <span>$10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
