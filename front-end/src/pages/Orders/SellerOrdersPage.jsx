import React from 'react';

import NavBar from '../../components/NavBar';
import SellerOrders from './SellerOrders';
import SOrdersPage from './styles/SOrdersPage';

function SellerOrdersPage() {
  return (
    <SOrdersPage>
      <NavBar />
      <SellerOrders />
    </SOrdersPage>
  );
}

export default SellerOrdersPage;
