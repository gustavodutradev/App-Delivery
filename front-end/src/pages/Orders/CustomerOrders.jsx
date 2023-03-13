import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axiosRequest from '../../utils/axios';
import SOrdersTable from './styles/SOrdersTable';
import OrderCard from './OrderCard';

function CustomerOrders() {
  const userId = useSelector((state) => state.user.id);
  const axios = axiosRequest();
  const [orders, setOrders] = useState([]);
  const redirect = useNavigate();

  useEffect(() => {
    axios.get(`/sales/user/${userId}`)
      .then((response) => {
        console.log(response.data);
        if (response.data.length === 0) redirect('/customer/products');
        setOrders(response.data);
      });
  }, []);

  return (
    <div>
      <SOrdersTable>
        {orders.map((order, index) => (
          <OrderCard
            key={ index }
            order={ order }
          />
        ))}
      </SOrdersTable>
    </div>
  );
}

export default CustomerOrders;
