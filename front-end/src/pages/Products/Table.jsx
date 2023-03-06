import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Card from './Card';
import { GET_STATUS_OK } from '../../utils/statusCodes';

const STable = styled.table`
  ${tw`
    table-auto
    m-1.5
    font-bold
    border
    rounded
    text-white
    p-1
  `}
`;

function Table() {
  const axios = axiosRequest();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const { status, data } = axios.get('/products');
    if (status === GET_STATUS_OK) setProducts(data);
  }, [axios]);

  return (
    <STable>
      {products.map((e) => <Card key={ e.id } product={ e } />)}
    </STable>
  );
}

Table.propTypes = {};

export default Table;
