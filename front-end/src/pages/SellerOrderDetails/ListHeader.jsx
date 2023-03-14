import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import OrderContext from './OrderContext';
import Button from '../../components/Button';
import axiosRequest from '../../utils/axios';
import { GET_STATUS_OK } from '../../utils/statusCodes';

const lintLength = 4;
const lintLength2 = 10;

function ListHeader() {
  const order = useContext(OrderContext);
  const token = useSelector((state) => state.user.token);

  return (
    <div>
      <span
        className="order-index"
        data-testid="seller_order_details__element-order-details-label-order-id"
      >
        {`PEDIDO ${String(order.saleId).padStart(lintLength, '0')}`}
      </span>
      <span
        className="date"
        data-testid="seller_order_details__element-order-details-label-order-date"
      >
        {order.saleDate.slice(0, lintLength2).split('-').reverse().join('/')}

      </span>
      <span
        className="status"
        data-testid="seller_order_details__element-order-details-label-delivery-status"
      >
        {order.status}

      </span>
      <Button
        className=""
        datatestId="seller_order_details__button-preparing-check"
        type="button"
        clickDouble
        onClick={ async () => {
          const { status } = await axiosRequest({ authorization: token })
            .put(`/sales/seller/${order.saleId}`, { status: 'Preparando' });
          if (status === GET_STATUS_OK) {
            window.location.reload(); // reload window to get new request
          }
          console.log(status);
        } }
        name="PREPARAR PEDIDO"
        disabled={ order.status.toLowerCase() !== 'pendente' }
      />
      <Button
        className=""
        datatestId="seller_order_details__button-dispatch-check"
        type="button"
        clickDouble
        onClick={ async () => {
          const { status } = await axiosRequest({ authorization: token })
            .put(`/sales/seller/${order.saleId}`, { status: 'Em Trânsito' });
          if (status) {
            window.location.reload(); // reload window to get new request
          }
        } }
        name="SAIU PARA ENTREGA"
        disabled={ order.status.toLowerCase() !== 'preparando' }
      />
    </div>
  );
}

export default ListHeader;
