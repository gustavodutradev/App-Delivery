import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import tw from 'twin.macro';
import CartListItem from './CartListItem';

const ListContainer = styled.div`
  ${tw`
    relative
  `}
  padding-bottom: 10rem; // deve ser relativo ao height do totalPrice
`;

const TotalPrice = styled.div`
  ${tw`
    flex
    items-center
    justify-center
    absolute
    bottom-4
    right-0
    rounded-xl
    text-white
    text-4xl
  `}
  background-color: #036B52;
  width: 18rem;
  height: 5rem; // deve ser relativo ao padding-bottom do ListContainer
`;

function CartList() {
  const products = useSelector((state) => state.cart.items);
  const totalPrice = products.reduce((acc, curr) => (
    acc + (curr.quantity * curr.price)
  ), 0);

  return (
    <ListContainer>
      <ul>
        {products
          .filter((e) => e.quantity > 0)
          .map((e, i) => (
            <li key={ i }>
              <CartListItem product={ e } index={ i } />
            </li>
          ))}
      </ul>
      <TotalPrice>
        Total: R$
        <span
          data-testid="customer_checkout__element-order-total-price"
        >
          { String(totalPrice.toFixed(2)).replace('.', ',') }
        </span>
      </TotalPrice>
    </ListContainer>
  );
}

CartList.propTypes = {};

export default CartList;
