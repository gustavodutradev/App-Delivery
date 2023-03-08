import React, { useEffect } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';
import axiosRequest from '../../utils/axios';
import { GET_STATUS_OK } from '../../utils/statusCodes';
import { addItem } from '../../redux/slices/cartSlice';

const STable = styled.div`
  ${tw`
    flex
    flex-wrap
    justify-center
    gap-3
    font-bold
    border
    text-white
    p-4
    w-full
  `}
  background-color: #FC0;
  border-color: #FC0;
`;

function Table() {
  const axios = axiosRequest();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.items);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { status, data } = await axios.get('/products');
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
  }, []);

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
