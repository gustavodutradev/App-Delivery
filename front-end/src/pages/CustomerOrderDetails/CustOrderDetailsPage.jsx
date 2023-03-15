import React from 'react';
import NavBar from '../../components/NavBar';
import OrderDetails from './OrderDetails';

// styles
import SDetails from './styles/SDetails';

function CustOrderDetailsPage() {
  return (
    <SDetails>
      <NavBar />
      <OrderDetails />
    </SDetails>
  );
}

export default CustOrderDetailsPage;
