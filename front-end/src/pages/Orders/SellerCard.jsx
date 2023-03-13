import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { SCard, SOrderID, SDateAndPrice, SStatus } from './styles/SCards';

const dateCharacters = 10;

function OrderCard(props) {
  const { order } = props;
  return (
    <Link to={ `/seller/orders/${order.id}` }>
      <SCard>
        <SOrderID data-testid={ `seller_orders__element-order-id-${order.id}` }>
          {order.id}
        </SOrderID>
        <SStatus data-testid={ `seller_orders__element-delivery-status-${order.id}` }>
          {order.status}
        </SStatus>
        <SDateAndPrice>
          <span
            data-testid={ `seller_orders__element-order-date-${order.id}` }
          >
            {order.saleDate.slice(0, dateCharacters).split('-').reverse().join('/')}
          </span>
          <span
            data-testid={ `seller_orders__element-card-price-${order.id}` }
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
    status: PropTypes.string,
    saleDate: PropTypes.string,
    totalPrice: PropTypes.string,
  }).isRequired,
};

export default OrderCard;
