import React, { useContext } from 'react';
import OrderContext from './OrderContext';

const lintLength = 4;

function ListHeader() {
  const order = useContext(OrderContext);
  const index = 1;// tem que pegar o index

  return (
    <div>
      <span
        className="order-index"
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        {`PEDIDO ${String(order.saleId).padStart(lintLength, '0')}`}
      </span>
      <span
        className="seller"
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        {`P.Vend: ${order.sellerName}`}

      </span>
      <span
        className="date"
        data-testid="Group customer_order_details__element-order-details-label-order-date"
      >
        {order.date}

      </span>
      <span
        className="status"
        data-testid={
          `customer_order_details__element-order-details-label-delivery-status${index}`
        }
      >
        {order.status}

      </span>
      <span
        className="confirm-delivery"
        data-testid="customer_order_details__button-delivery-check"
      >
        should be a btn

      </span>
    </div>
  );
}

export default ListHeader;
