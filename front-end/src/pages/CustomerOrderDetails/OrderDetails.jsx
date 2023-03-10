import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import OrderContext from './Context';
import OrderList from './OrderList';

function OrderDetails() {
  const [products, setProducts] = useState([]);

  const token = useSelector((state) => state.user.token);
  const { id } = useParams();

  useEffect(() => {
    const fetchOrder = async () => {
      const { data } = await (axiosRequest({ authorization: token }).get(`/sales/${id}`));
      setProducts(data.products);
    };
    fetchOrder();
  }, [id, token]);

  return (
    <OrderContext provider={ products }>
      <OrderList />
    </OrderContext>
  );
}

OrderDetails.propTypes = {};

export default OrderDetails;
