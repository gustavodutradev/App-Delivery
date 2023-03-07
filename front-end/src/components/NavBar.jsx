import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import tw from 'twin.macro';
import styled from 'styled-components';
import Button from './Button';

const SNav = styled.nav`
  ${tw`
  w-full
  flex
  justify-between
  p-1.5
  `}
  span {
    display: flex;
    text-align: center;
    align-items: center;
  }
  background-color: #333333;
`;
const SRigth = styled.ul`
  ${tw`
  flex
  `}
    li {
    float: right;
    list-style-type: none;
  }
  span {
    color: #FC0;
    font-weight: bold;
  }
  button {
    background-color: #333333;
    border: 1px solid #FC0;
    color: #FC0;
    border-radius: 10px;
    font-weight: lighter;
      &:hover {
        background-color:#FC0;
        border: 1px solid #333333;
        color: #333333;
    }
  }

`;

const SLeft = styled.ul`
  ${tw`
  flex
  `}
    li {
    float: left;
    list-style-type: none;
  }
  button {
    background-color: #333333;
    border: 1px solid #FC0;
    color: #FC0;
    border-radius: 10px;
    font-weight: lighter;
      &:hover {
      background-color:#FC0;
      border: 1px solid #333333;
      color: #333333;
    }
  }
`;

function NavBar() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const goToProducts = () => navigate('/customer/products');
  const goToOrders = () => navigate('/customer/orders');
  const logout = () => {
    localStorage.clear();
    navigate('/');
  };

  const name = useSelector((state) => state.user.name);

  useEffect(() => {
    setUsername(name);
  }, [setUsername, name]);

  return (
    <SNav>
      <SLeft>
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
      </SLeft>
      <SRigth>
        <span
          data-testid="customer_products__element-navbar-user-full-name"
        >
          { `Olá, ${username} ` }
        </span>

        <Button
          name="Sair"
          datatestId="customer_products__element-navbar-link-logout"
          onClick={ logout }
        />
      </SRigth>
    </SNav>
  );
}

export default NavBar;
