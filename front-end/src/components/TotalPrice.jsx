import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

const STotalPrice = styled.div`
  ${tw`
    flex
    justify-center
    items-center
    gap-1
    p-1
  `}
  width: 150px;
  font-weight: bold;
  border-radius: 20px;
  background-color: #036B52;
  position: fixed;
  color: white;
  font-size: 18px;
  bottom: 0;
  right: 0;
  margin: 1rem;
  box-shadow: 0.3rem 0.3rem 0.7rem #333333;
`;

function TotalPrice({ products, dataTestid }) {
  const totalPrice = products.reduce((acc, curr) => (
    acc + (curr.quantity * (+curr.price))
  ), 0);

  return (
    <STotalPrice>
      Total: R$
      <span
        data-testid={ dataTestid }
      >
        { String(totalPrice.toFixed(2)).replace('.', ',') }
      </span>
    </STotalPrice>
  );
}

TotalPrice.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    price: PropTypes.string,
    quantity: PropTypes.number,
  })).isRequired,
  dataTestid: PropTypes.string,
};

TotalPrice.defaultProps = {
  dataTestid: '',
};

export default TotalPrice;
