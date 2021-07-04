import React from 'react';

import initialState from '../initialState';
import Products from '../components/Products';
import MetaHead from '../components/MetaHead';

export default function Home() {
  return (
    <>
      <MetaHead
        title="Productos"
        description="Encuentra todos tus productos favoritos de esta conf merch"
        image="https://bucket-public-carlos-angel.s3.us-east-2.amazonaws.com/platziconf/logo.pagina-web.png"
        url="https://conf-merch-b592f.firebaseapp.com/"
      />
      <Products products={initialState.products} />
    </>
  );
}
