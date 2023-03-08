import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/Button';

const Fixed = styled(Button)`
  position: fixed;
  bottom: 2vh;
  right: 2vh;
  height: 4rem;
  width: 17rem;
  font-size: 1.5em;
  border-radius: 25px;
  font-weight: lighter;
`;

function CartButton() {
  const navigate = useNavigate();
  const goToCart = () => navigate('/customer/checkout');
  const productsRedux = useSelector((state) => state.cart.items);

  const totalPrice = (products) => products.reduce((acc, curr) => (
    acc + (curr.quantity * curr.price)
  ), 0);

  return (
    <Fixed
      type="button"
      datatestId="customer_products__button-cart"
      name={
        <>
          Ver Carrinho: R$
          <span
            data-testid="customer_products__checkout-bottom-value"
          >
            { String(totalPrice(productsRedux).toFixed(2)).replace('.', ',') }
          </span>
        </>
      }
      onClick={ goToCart }
    />
  );
}

export default CartButton;
