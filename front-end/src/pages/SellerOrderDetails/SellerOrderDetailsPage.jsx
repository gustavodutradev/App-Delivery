import React from 'react';
import NavBar from '../../components/NavBar';
import OrderDetails from './OrderDetails';

import SDetails from './styles/SDetails';

function SellerOrderDetailsPage() {
  return (
    <SDetails>
      <NavBar />
      <OrderDetails />
    </SDetails>
  );
}

export default SellerOrderDetailsPage;
