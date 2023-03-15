import React, { useContext } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import TotalPrice from '../../components/TotalPrice';
import OrderContext from './OrderContext';
import ProductItem from './ProductItem';

const ListContainer = styled.div`
  @media only screen and (min-width: 360px) and (max-width: 480px) {
    width: fit-content;
    height: 100vh;
  }
`;

function OrderList() {
  const order = useContext(OrderContext);

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
        dataTestid="customer_order_details__element-order-total-price"
      />
    </ListContainer>
  );
}

OrderList.propTypes = {};

export default OrderList;
