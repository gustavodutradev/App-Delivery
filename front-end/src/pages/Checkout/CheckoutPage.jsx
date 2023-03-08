import React from 'react';
import NavBar from '../../components/NavBar';
import CartList from './CartList';
import DeliveryDetails from './DeliveryDetails';

function CheckoutPage() {
  return (
    <>
      <NavBar />
      <CartList />
      <DeliveryDetails />
    </>
  );
}

export default CheckoutPage;
