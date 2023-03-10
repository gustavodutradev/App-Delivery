import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axiosRequest from '../../utils/axios';

function CustomerOrders() {
  const userId = useSelector((state) => state.user.id);
  const axios = axiosRequest();

  const [orders, setOrders] = useState([]);

  // const getUserOrders = async () => {
  //   const orderss = await axios.get(`/sales/user/${userId}`);
  //   console.log(orderss);
  // };

  useEffect(() => {
    console.log(userId);
    axios.get(`/sales/user/${userId}`)
      .then((response) => {
        setOrders(response.data);
      });
  }, []);

  console.log(orders);

  return (
    <div>
      <h1>Orders</h1>
      {orders.map((order) => (
        <div key={ order.id }>
          <p>{order.id}</p>
          <p>{order.status}</p>
          <p>{order.saleDate}</p>
          <p>{order.totalPrice}</p>
        </div>
      ))}
    </div>
  );
}

export default CustomerOrders;
