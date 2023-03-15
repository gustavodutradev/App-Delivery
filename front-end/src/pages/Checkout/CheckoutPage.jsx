import React from 'react';
import NavBar from '../../components/NavBar';
import CartList from './CartList';
import DeliveryDetails from './DeliveryDetails';

import SCheckout from './styles/SCheckOut';

function CheckoutPage() {
  return (
    <SCheckout>
      <NavBar />
      <CartList />
      <DeliveryDetails />
    </SCheckout>
  );
}

export default CheckoutPage;
