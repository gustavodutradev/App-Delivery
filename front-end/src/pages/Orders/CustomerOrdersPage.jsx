import React from 'react';

import NavBar from '../../components/NavBar';
import CustomerOrders from './CustomerOrders';
import SOrdersPage from './styles/SOrdersPage';

function CustomerOrdersPage() {
  return (
    <SOrdersPage>
      <NavBar />
      <CustomerOrders />
    </SOrdersPage>
  );
}

export default CustomerOrdersPage;
