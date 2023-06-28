import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import TotalPrice from '../../components/TotalPrice';
import CartListItem from './CartListItem';

const ListContainer = styled.div`
  @media only screen and (min-width: 360px) and (max-width: 480px) {
    width: fit-content;
    height: fit-content;
  }
`;

function CartList() {
  const products = useSelector((state) => state.cart.items);
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
      <TotalPrice
        dataTestid="customer_checkout__element-order-total-price"
        products={ products }
      />
    </ListContainer>
  );
}

CartList.propTypes = {};

export default CartList;
