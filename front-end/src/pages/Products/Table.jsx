import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Card from './Card';
import axiosRequest from '../../utils/axios';
import { GET_STATUS_OK } from '../../utils/statusCodes';

const STable = styled.div`
  ${tw`
    grid
    grid-cols-4
    font-bold
    border
    border-blue-700
    rounded
    text-white
    p-4
  `}
  background-color: #FC0;
`;

function Table() {
  const axios = axiosRequest();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { status, data } = await axios.get('/products');
        if (status === GET_STATUS_OK) setProducts(data);
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
        product={ {
          price: Number(e.price),
          ...e,
        } }
      />))}
    </STable>
  );
}

Table.propTypes = {};

export default Table;
