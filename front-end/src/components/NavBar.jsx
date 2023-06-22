import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';
import { clearCart } from '../redux/slices/cartSlice';
import { logout } from '../redux/slices/userSlice';
import Button from './Button';

const SNav = styled.nav`
@media only screen and (min-width: 360px) and (max-width: 480px) {  
  ${tw`
  flex
  justify-evenly
  `}
  min-width: 100%;
  height: 3rem;
  span {
    display: flex;
    text-align: center;
    align-items: center;
  }
  background-color: #433f5a;
  }
`;

const SRigth = styled.ul`
@media only screen and (min-width: 360px) and (max-width: 480px) {
  ${tw`
  flex
  justify-end
  items-center
  m-1
  `}
  align-items: center;
  width: 100%;
  
  span {
    color: #ff6442;
    font-weight: bold;
    font-size: 12px;
  }
  button {
    background-color: #433f5a;
    border: 1px solid #ff6442;
    color: #ff6442;
    border-radius: 10px;
    font-size: 12px;
    font-weight: bold;
    height: 1.2rem;
    width: 3rem;
      &:hover {
        background-color:rgb(255, 197, 0);
        border: 1px solid rgb(255, 197, 0);
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
  align-items: center;

  button {
    background-color: #433f5a;
    border: 1px solid #ff6442;
    color: #ff6442;
    border-radius: 10px;
    font-size: 12px;
    font-weight: bold;
    height: 1.2rem;
    width: 4rem;
      &:active {
      transition: 0.1s;
      transform: scale(1.1);
      border: 1px solid rgb(255, 197, 0);
      color: rgb(255, 197, 0);
    }
  }
}
`;

function NavBar() {
  const [username, setUsername] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goToProducts = () => navigate('/customer/products');
  const goToOrders = (user) => {
    const urlToNavigate = `/${user}/orders`;
    if (urlToNavigate === location.pathname) {
      window.location.reload();
    } else {
      navigate(urlToNavigate);
    }
  };
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
