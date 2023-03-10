import React, { createContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import OrderList from './OrderList';

export const OrderContext = createContext({});

function OrderDetails() {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchOrder = async () => {
      const { data } = await (axiosRequest({ authorization: token }).get(`/sales/${id}`));
      setProducts(data.products);
    };
    fetchOrder();
  }, [id]);

  return (
    <OrderContext provider={ products }>
      <OrderList />
    </OrderContext>
  );
}

OrderDetails.propTypes = {};

export default OrderDetails;
