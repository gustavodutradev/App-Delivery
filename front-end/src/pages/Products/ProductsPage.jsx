import React from 'react';
import Table from './Table';
import NavBar from '../../components/NavBar';
import CartButton from './CartButton';

function ProductsPage() {
  return (
    <>
      <NavBar />
      <Table />
      <CartButton />
    </>
  );
}

export default ProductsPage;
