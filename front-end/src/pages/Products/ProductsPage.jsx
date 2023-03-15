import React from 'react';
import Table from './Table';
import NavBar from '../../components/NavBar';
import CartButton from './CartButton';
import SProductsPage from './styles/SProductsPage';

function ProductsPage() {
  return (
    <SProductsPage>
      <NavBar />
      <Table />
      <CartButton />
    </SProductsPage>

  );
}

export default ProductsPage;
