import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosRequest from '../../utils/axios';
import ListHeader from './ListHeader';
import OrderContext from './OrderContext';
import OrderList from './OrderList';

function OrderDetails() {
  const [order, setOrder] = useState();

  const { id } = useParams();

  const fetchOrder = useCallback(async () => {
    const { data } = await (axiosRequest().get(`/sales/${id}`));
    setOrder(data);
  }, [id]);

  const contextValue = useMemo(() => ({ order, fetchOrder }), [order, fetchOrder]);

  useEffect(() => {
    fetchOrder();
  }, [fetchOrder]);

  return (
    <OrderContext.Provider value={ contextValue }>
      { order && <ListHeader /> }
      { order && <OrderList /> }
    </OrderContext.Provider>
  );
}

OrderDetails.propTypes = {};

export default OrderDetails;
