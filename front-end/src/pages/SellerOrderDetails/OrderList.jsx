import React, { useContext } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import TotalPrice from '../../components/TotalPrice';
import OrderContext from './OrderContext';
import ProductItem from './ProductItem';

const ListContainer = styled.div`
  ${tw`
    relative
  `}
  padding-bottom: 10rem; // deve ser relativo ao height do totalPrice
`;

function OrderList() {
  const { order } = useContext(OrderContext);

  return (
    <ListContainer>
      <ul>
        {order.products
          .filter((e) => e.quantity > 0)
          .map((e, i) => (
            <li key={ i }>
              <ProductItem product={ e } index={ i } />
            </li>
          ))}
      </ul>
      <TotalPrice
        products={ order.products }
        dataTestid="seller_order_details__element-order-total-price"
      />
    </ListContainer>
  );
}

OrderList.propTypes = {};

export default OrderList;
