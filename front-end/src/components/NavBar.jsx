import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import tw from 'twin.macro';
import styled from 'styled-components';
import Button from './Button';
import { clearCart } from '../redux/slices/cartSlice';
import { logout } from '../redux/slices/userSlice';

const SNav = styled.nav`
@media only screen and (min-width: 360px) and (max-width: 480px) {  
  ${tw`
  flex
  justify-evenly
  `}
  width: 100%;
  height: 3rem;
  span {
    display: flex;
    text-align: center;
    align-items: center;
  }
  background-color: #333333;
  }
`;

const SRigth = styled.ul`
@media only screen and (min-width: 360px) and (max-width: 480px) {
  ${tw`
  flex
  justify-center
  `}
  align-items: center;
  width: 100%;
  margin-right: 1.5rem;
  
  span {
    color: rgb(255, 197, 0);
    font-weight: bold;
    font-size: 12px;
  }
  button {
    background-color: #333333;
    border: 1px solid rgb(255, 197, 0);
    color: rgb(255, 197, 0);
    border-radius: 10px;
    font-size: 12px;
    font-weight: bold;
    height: 1.7rem;
    width: 3.5rem;
      &:hover {
        background-color:rgb(255, 197, 0);
        border: 1px solid #333333;
        color: #333333;
    }
  }
}
`;

const SLeft = styled.ul`
@media only screen and (min-width: 360px) and (max-width: 480px) {
  ${tw`
  flex
  `}
  margin-left: 1rem;
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
    font-size: 12px;
    font-weight: bold;
    height: 1.5rem;
    width: 4.5rem;
      &:hover {
      background-color:rgb(255, 197, 0);
      border: 1px solid #333333;
      color: #333333;
    }
  }
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
