import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Link } from 'react-router-dom';

const dateCharacters = 10;

const SCard = styled.div`
${tw`
    grid
    grid-cols-3
    gap-x-3
    items-center
    border
    rounded
    p-2
    m-2
    font-bold
    text-white
`}
`;

const SOrderID = styled.div`
${tw`
    flex
    justify-center
`}
width: 50px;
`;

const SDateAndPrice = styled.div`
${tw`
    flex
    flex-col
    justify-center
    items-center
    ml-1
`}
line-height: 1.6rem;
`;

const SStatus = styled.div`
${tw`
    flex
    justify-center
    p-2
`}
border: 1px solid white;
border-radius: 20px;
`;

function OrderCard(props) {
  const { order } = props;
  return (
    <Link to={ `/customer/orders/${order.id}` }>
      <SCard>
        <SOrderID data-testid={ `customer_orders__element-order-id-${order.id}` }>
          {order.id}
        </SOrderID>
        <SStatus data-testid={ `customer_orders__element-delivery-status-${order.id}` }>
          {order.status}
        </SStatus>
        <SDateAndPrice>
          <span
            data-testid={ `customer_orders__element-order-date-${order.id}` }
          >
            {order.saleDate.slice(0, dateCharacters).split('-').reverse().join('/')}
          </span>
          <span
            data-testid={ `customer_orders__element-card-price-${order.id}` }
          >
            R$
            {' '}
            {order.totalPrice.replace('.', ',')}
          </span>
        </SDateAndPrice>
      </SCard>
    </Link>
  );
}

OrderCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number,
    userId: PropTypes.number,
    status: PropTypes.string,
    saleDate: PropTypes.string,
    totalPrice: PropTypes.string,
  }).isRequired,
};

export default OrderCard;
