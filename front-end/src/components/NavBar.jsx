import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

function NavBar() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const goToProducts = () => navigate('/customer/products');
  const goToOrders = () => navigate('/customer/orders');

  const name = useSelector((state) => state.user.name);

  useEffect(() => {
    setUsername(name);
  }, [setUsername, name]);

  return (
    <nav>

      <Button
        name="Produtos"
        datatestId="customer_products__element-navbar-link-products"
        onClick={ goToProducts }
      />

      <Button
        name="Pedidos"
        datatestId="customer_products__element-navbar-link-orders"
        onClick={ goToOrders }
      />

      <span
        datatest-id="customer_products__element-navbar-user-full-name"
      >
        { username }
      </span>

      <Button
        name="Sair"
        datatestId="customer_products__element-navbar-link-logout"
        // onClick={}
      />
    </nav>
  );
}

export default NavBar;
