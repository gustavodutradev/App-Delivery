import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import tw from 'twin.macro';
import styled from 'styled-components';
import Button from './Button';
import { clearCart } from '../redux/slices/cartSlice';
import { logout } from '../redux/slices/userSlice';
import logo from '../images/appdeliverylogo.png';

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
  align-middle
  gap-3
  `}
  
  align-items: center;

  li {
    float: right;
    list-style-type: none;
  }
  span {
    color: rgb(255, 197, 0);
    font-weight: bold;
  }
  button {
    background-color: #333333;
    border: 1px solid rgb(255, 197, 0);
    color: rgb(255, 197, 0);
    border-radius: 10px;
    font-weight: lighter;
    height: 2.5rem;
    width: 4.5rem;
      &:hover {
        background-color:rgb(255, 197, 0);
        border: 1px solid #333333;
        color: #333333;
    }
  }

`;

const SLeft = styled.ul`
  ${tw`
  flex
  gap-3
  `}
  
  align-items: center;
  
  li {
    float: left;
    list-style-type: none;
  }
  button {
    background-color: #333333;
    border: 1px solid rgb(255, 197, 0);
    color: rgb(255, 197, 0);
    border-radius: 10px;
    font-weight: lighter;
    height: 3rem;
    width: 7rem;
      &:hover {
      background-color:rgb(255, 197, 0);
      border: 1px solid #333333;
      color: #333333;
    }
  }
  img {
    height: 5rem;
    width: 5rem;
  }
`;

function NavBar() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goToProducts = () => navigate('/customer/products');
  const goToOrders = (user) => navigate(`/${user}/orders`);
  const logoutOnClick = () => {
    dispatch(clearCart());
    dispatch(logout());
    localStorage.clear();
    navigate('/');
  };

  const name = useSelector((state) => state.user.name);
  const role = useSelector((state) => state.user.role);

  useEffect(() => {
    setUsername(name);
  }, [setUsername, name]);

  return (
    <SNav>
      <SLeft>
        <img src={ logo } alt="app-logo" />
        { role === 'seller'
        && <Button
          name="Pedidos"
          datatestId="customer_products__element-navbar-link-orders"
          onClick={ () => goToOrders('seller') }
        />}

        {
          role === 'customer'
        && (
          <>
            <Button
              name="Produtos"
              datatestId="customer_products__element-navbar-link-products"
              onClick={ goToProducts }
            />
            <Button
              name="Pedidos"
              datatestId="customer_products__element-navbar-link-orders"
              onClick={ () => goToOrders('customer') }
            />
          </>
        )
        }
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
          onClick={ logoutOnClick }
        />
      </SRigth>
    </SNav>
  );
}

export default NavBar;
