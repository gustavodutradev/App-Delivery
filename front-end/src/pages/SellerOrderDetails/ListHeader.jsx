import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import OrderContext from './OrderContext';
import Button from '../../components/Button';
import axiosRequest from '../../utils/axios';
import { GET_STATUS_OK } from '../../utils/statusCodes';

const lintLength = 4;
const lintLength2 = 10;

function ListHeader() {
  const { order } = useContext(OrderContext);
  const [stat, setStat] = useState(order.status);
  const token = useSelector((state) => state.user.token);

  const request = async (statusToCHange) => {
    const { status } = await axiosRequest({ authorization: token })
      .put(`/sales/seller/${order.saleId}`, { status: statusToCHange });
    if (status === GET_STATUS_OK) {
      console.log('ok');
    }
  };

  const changeStatus = async (statusToChange) => {
    setStat(statusToChange);
    await request(statusToChange);
  };

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
        {stat}

      </span>
      <Button
        className=""
        datatestId="seller_order_details__button-preparing-check"
        type="button"
        onClick={ () => { changeStatus('Preparando'); } }
        name="PREPARAR PEDIDO"
        disabled={ stat.toLowerCase() !== 'pendente' }
      />
      <Button
        className=""
        datatestId="seller_order_details__button-dispatch-check"
        type="button"
        onClick={ () => { changeStatus('Em Trânsito'); } }
        name="SAIU PARA ENTREGA"
        disabled={ stat.toLowerCase() !== 'preparando' }
      />
    </div>
  );
}

export default ListHeader;
