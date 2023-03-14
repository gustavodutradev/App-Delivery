import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosRequest from '../../utils/axios';
import ListHeader from './ListHeader';
import OrderContext from './OrderContext';
import OrderList from './OrderList';

function OrderDetails() {
  const [order, setOrder] = useState();

  const { id } = useParams();

  const contextValue = useMemo(() => ({ order }), [order]);

  useEffect(() => {
    const fetchOrder = async () => {
      const { data } = await (axiosRequest().get(`/sales/${id}`));
      setOrder(data);
    };
    fetchOrder();
  }, [id]);

  return (
    <OrderContext.Provider value={ contextValue }>
      { order && <ListHeader /> }
      { order && <OrderList /> }
    </OrderContext.Provider>
  );
}

OrderDetails.propTypes = {};

export default OrderDetails;
