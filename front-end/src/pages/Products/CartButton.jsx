import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/Button';

const Fixed = styled(Button)`
  @media only screen and (min-width: 360px) and (max-width: 480px) {
    size-adjust: inherit;
    position: sticky;
    bottom: 0.5rem;
    top: 0;
    height: 1.5rem;
    width: 11rem;
    font-size: 0.9rem;
    font-weight: bold;
    border-radius: 25px;
    padding: 3px 0 0 0;
    border-color: #036B52;
    background-color:#036B52;
    color: white;
  }
`;

function CartButton() {
  const navigate = useNavigate();
  const goToCart = () => navigate('/customer/checkout');
  const productsRedux = useSelector((state) => state.cart.items);

  const totalPrice = productsRedux.reduce((acc, curr) => (
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
            { String(totalPrice.toFixed(2)).replace('.', ',') }
          </span>
        </>
      }
      disabled={ totalPrice <= 0 }
      onClick={ goToCart }
    />
  );
}

export default CartButton;
