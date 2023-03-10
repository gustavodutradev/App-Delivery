import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axiosRequest from '../../utils/axios';
import OrderContext from './Context';
import OrderList from './OrderList';

function OrderDetails() {
  const [order, setOrder] = useState([]);

  const token = useSelector((state) => state.user.token);
  const { id } = useParams();

  useEffect(() => {
    const fetchOrder = async () => {
      const { data } = await (axiosRequest({ authorization: token }).get(`/sales/${id}`));
      setOrder(data);
    };
    fetchOrder();
  }, [id, token]);

  return (
    <OrderContext.Provider value={ order }>
      <OrderList />
    </OrderContext.Provider>
  );
}

OrderDetails.propTypes = {};

export default OrderDetails;
