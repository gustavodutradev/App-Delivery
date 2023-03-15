import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';
import axiosRequest from '../../utils/axios';
import { GET_STATUS_OK } from '../../utils/statusCodes';
import { addItem } from '../../redux/slices/cartSlice';

import STable from './styles/STable';

function Table() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.items);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { status, data } = await axiosRequest().get('/products');
        if (status === GET_STATUS_OK) {
          return data.forEach((item) => {
            dispatch(addItem({
              price: Number(item.price),
              quantity: 0,
              ...item,
            }));
          });
        }
      } catch (err) {
        console.log(`Products Table error: ${err}`);
      }
    };
    fetchProducts();
  }, [dispatch]);

  return (
    <STable>
      {products.map((e) => (<Card
        key={ e.id }
        product={ e }
      />))}
    </STable>
  );
}

Table.propTypes = {};

export default Table;
