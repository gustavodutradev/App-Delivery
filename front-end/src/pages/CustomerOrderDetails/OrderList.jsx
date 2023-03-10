import React, { useContext } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import TotalPrice from '../../components/TotalPrice';
import OrderContext from './Context';
import ProductItem from './ProductItem';

const ListContainer = styled.div`
  ${tw`
    relative
  `}
  padding-bottom: 10rem; // deve ser relativo ao height do totalPrice
`;

function OrderList() {
  const products = useContext(OrderContext);

  return (
    <ListContainer>
      <ul>
        {products
          .filter((e) => e.quantity > 0)
          .map((e, i) => (
            <li key={ i }>
              <ProductItem product={ e } index={ i } />
            </li>
          ))}
      </ul>
      <TotalPrice
        products={ products }
        dataTestid="customer_order_details__element-order-total-price"
      />
    </ListContainer>
  );
}

OrderList.propTypes = {};

export default OrderList;
